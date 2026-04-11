import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { initialDecisionRecord } from '../types/schema';
import type { DecisionRecord } from '../types/schema';
import { generateUUID } from '../utils/idUtils';

type AppView = 'welcome' | 'workspace' | 'preview' | 'method' | 'register';

interface AppContextType {
    currentView: AppView;
    setCurrentView: (view: AppView) => void;
    record: DecisionRecord;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateRecord: (section: keyof DecisionRecord, field: string, value: any) => void;
    setFullRecord: (record: DecisionRecord) => void;
    resetRecord: () => void;
    activeFormSection: string;
    setActiveFormSection: (section: string) => void;
    recordList: DecisionRecord[];
    saveToRegister: () => void;
    deleteFromRegister: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [currentView, setCurrentView] = useState<AppView>('welcome');
    const [record, setRecord] = useState<DecisionRecord>(() => {
        const savedDraft = localStorage.getItem('cp_dr_draft');
        return savedDraft ? JSON.parse(savedDraft) : initialDecisionRecord;
    });
    const [recordList, setRecordList] = useState<DecisionRecord[]>(() => {
        const savedRegister = localStorage.getItem('cp_dr_register');
        return savedRegister ? JSON.parse(savedRegister) : [];
    });
    const [activeFormSection, setActiveFormSection] = useState<string>('metadata');

    useEffect(() => {
        localStorage.setItem('cp_dr_draft', JSON.stringify(record));
    }, [record]);

    useEffect(() => {
        localStorage.setItem('cp_dr_register', JSON.stringify(recordList));
    }, [recordList]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateRecord = (section: keyof DecisionRecord, field: string, value: any) => {
        setRecord((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            },
            Metadata: {
                ...prev.Metadata,
                date_modified: new Date().toISOString()
            }
        }));
    };

    const setFullRecord = (newRecord: DecisionRecord) => {
        setRecord(newRecord);
    };

    const resetRecord = () => {
        setRecord({
            ...initialDecisionRecord,
            Metadata: {
                ...initialDecisionRecord.Metadata,
                record_id: generateUUID(),
                date_created: new Date().toISOString(),
                date_modified: new Date().toISOString()
            }
        });
    };

    const saveToRegister = () => {
        setRecordList(prev => {
            const index = prev.findIndex(r => r.Metadata.record_id === record.Metadata.record_id);
            if (index >= 0) {
                const newList = [...prev];
                newList[index] = record;
                return newList;
            }
            return [...prev, record];
        });
    };

    const deleteFromRegister = (id: string) => {
        setRecordList(prev => prev.filter(r => r.Metadata.record_id !== id));
    };

    return (
        <AppContext.Provider value={{ 
            currentView, 
            setCurrentView, 
            record, 
            updateRecord, 
            setFullRecord, 
            resetRecord, 
            activeFormSection, 
            setActiveFormSection,
            recordList,
            saveToRegister,
            deleteFromRegister
        }}>
            {children}
        </AppContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}
