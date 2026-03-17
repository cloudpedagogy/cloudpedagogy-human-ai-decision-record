import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { initialDecisionRecord } from '../types/schema';
import type { DecisionRecord } from '../types/schema';
import { generateUUID } from '../utils/idUtils';

type AppView = 'welcome' | 'workspace' | 'preview' | 'method';

interface AppContextType {
    currentView: AppView;
    setCurrentView: (view: AppView) => void;
    record: DecisionRecord;
    updateRecord: (section: keyof DecisionRecord, field: string, value: any) => void;
    setFullRecord: (record: DecisionRecord) => void;
    resetRecord: () => void;
    activeFormSection: string;
    setActiveFormSection: (section: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [currentView, setCurrentView] = useState<AppView>('welcome');
    const [record, setRecord] = useState<DecisionRecord>(initialDecisionRecord);
    const [activeFormSection, setActiveFormSection] = useState<string>('metadata');

    const updateRecord = (section: keyof DecisionRecord, field: string, value: any) => {
        setRecord((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
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

    return (
        <AppContext.Provider value={{ currentView, setCurrentView, record, updateRecord, setFullRecord, resetRecord, activeFormSection, setActiveFormSection }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}
