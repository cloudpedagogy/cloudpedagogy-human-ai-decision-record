import { useAppContext } from '../store/AppContext';

const sections = [
    { id: 'metadata', label: 'Record Metadata' },
    { id: 'context', label: 'Decision Context' },
    { id: 'ai', label: 'AI Involvement' },
    { id: 'interpretation', label: 'Human Interpretation' },
    { id: 'assumptions', label: 'Assumptions & Limitations' },
    { id: 'risks', label: 'Risks & Safeguards' },
    { id: 'outcome', label: 'Decision Outcome' },
    { id: 'reflection', label: 'Review & Reflection' },
];

export function Sidebar() {
    const { setCurrentView, activeFormSection, setActiveFormSection, record } = useAppContext();

    // Helper to check if a section is "complete enough" (very basic check)
    const isSectionComplete = (id: string) => {
        switch (id) {
            case 'metadata': return !!record.Metadata.record_title;
            case 'context': return !!record.DecisionContext.decision_context_summary;
            case 'ai': return !!record.AIInvolvement.ai_system_name;
            case 'interpretation': return !!record.HumanInterpretation.interpretation_summary;
            case 'assumptions': return !!record.AssumptionsAndLimitations.data_assumptions;
            case 'risks': return !!record.RisksAndSafeguards.operational_risk;
            case 'outcome': return !!record.DecisionOutcome.final_decision;
            case 'reflection': return !!record.Reflection.lessons_learned;
            default: return false;
        }
    };

    return (
        <div className="sidebar-container" style={{ padding: 'var(--spacing-lg) var(--spacing-md)', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <nav aria-label="Decision Record Sections" style={{ flex: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {sections.map(section => {
                        const complete = isSectionComplete(section.id);
                        return (
                            <li key={section.id} style={{ marginBottom: '2px' }}>
                                <button
                                    className={`section-link ${activeFormSection === section.id ? 'active' : ''}`}
                                    onClick={() => setActiveFormSection(section.id)}
                                    style={{
                                        width: '100%',
                                        textAlign: 'left',
                                        padding: 'var(--spacing-sm) var(--spacing-md)',
                                        fontSize: 'var(--font-size-meta)',
                                        backgroundColor: activeFormSection === section.id ? 'var(--color-primary-light)' : 'transparent',
                                        color: activeFormSection === section.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                        fontWeight: activeFormSection === section.id ? 600 : 400,
                                        border: 'none',
                                        borderRadius: 'var(--radius-md)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        transition: 'all 0.1s ease'
                                    }}
                                >
                                    <span>{section.label}</span>
                                    {complete && <span style={{ color: 'var(--color-border-default)', fontSize: '10px' }}>●</span>}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-border-default)', paddingTop: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                <button
                    onClick={() => setCurrentView('preview')}
                    className="btn-primary"
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-sm)' }}
                >
                    Review & Export
                </button>
                <button
                    onClick={() => setCurrentView('welcome')}
                    className="btn-secondary"
                    style={{ width: '100%' }}
                >
                    Exit Workspace
                </button>
            </div>
        </div>
    );
}
