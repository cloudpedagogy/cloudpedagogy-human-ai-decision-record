import { useAppContext } from '../store/AppContext';
import { RecordMetadataForm } from '../components/forms/RecordMetadataForm';
import { DecisionContextForm } from '../components/forms/DecisionContextForm';
import { AIInvolvementForm } from '../components/forms/AIInvolvementForm';
import { HumanInterpretationForm } from '../components/forms/HumanInterpretationForm';
import { AssumptionsForm } from '../components/forms/AssumptionsForm';
import { RisksForm } from '../components/forms/RisksForm';
import { DecisionOutcomeForm } from '../components/forms/DecisionOutcomeForm';
import { ReflectionForm } from '../components/forms/ReflectionForm';

export function Workspace() {
    const { activeFormSection: activeSection } = useAppContext();

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
            <div className="form-content-area" style={{ backgroundColor: 'var(--color-bg-body)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border-default)' }}>
                {renderSection()}
            </div>
        </div>
    );
}
