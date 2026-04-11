import { useAppContext } from '../store/AppContext';
import { RecordMetadataForm } from '../components/forms/RecordMetadataForm';
import { DecisionContextForm } from '../components/forms/DecisionContextForm';
import { AIInvolvementForm } from '../components/forms/AIInvolvementForm';
import { HumanInterpretationForm } from '../components/forms/HumanInterpretationForm';
import { AssumptionsForm } from '../components/forms/AssumptionsForm';
import { RisksForm } from '../components/forms/RisksForm';
import { DecisionOutcomeForm } from '../components/forms/DecisionOutcomeForm';
import { ReflectionForm } from '../components/forms/ReflectionForm';
import { calculateAuditScore } from '../utils/auditUtils';

export function Workspace() {
    const { activeFormSection: activeSection, record, saveToRegister } = useAppContext();
    const auditScore = calculateAuditScore(record);

    const renderSection = () => {
        switch (activeSection) {
            case 'metadata': return <RecordMetadataForm />;
            case 'context': return <DecisionContextForm />;
            case 'ai': return <AIInvolvementForm />;
            case 'interpretation': return <HumanInterpretationForm />;
            case 'assumptions': return <AssumptionsForm />;
            case 'risks': return <RisksForm />;
            case 'outcome': return <DecisionOutcomeForm />;
            case 'reflection': return <ReflectionForm />;
            default: return <RecordMetadataForm />;
        }
    };

    return (
        <div className="workspace-container">
            <div className="workspace-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-md)', padding: '0 var(--spacing-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                    <div style={{ padding: '4px 12px', background: auditScore === 100 ? '#D1FAE5' : '#FEF3C7', color: auditScore === 100 ? '#065F46' : '#92400E', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, border: '1px solid currentColor' }}>
                        Audit Readiness: {auditScore}%
                    </div>
                    {auditScore < 100 && (
                        <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
                            * Complete golden fields for full readiness
                        </div>
                    )}
                </div>
                <button 
                    className="btn btn-primary" 
                    onClick={() => {
                        saveToRegister();
                        alert('Record saved to Batch Register.');
                    }}
                    style={{ fontSize: '0.8rem', padding: '6px 16px' }}
                >
                    Save to Register
                </button>
            </div>
            <div className="form-content-area" style={{ backgroundColor: 'var(--color-bg-body)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border-default)' }}>
                {renderSection()}
            </div>
        </div>
    );
}
