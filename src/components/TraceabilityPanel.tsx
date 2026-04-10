import { useAppContext } from '../store/AppContext';

export function TraceabilityPanel() {
    const { record } = useAppContext();

    // Calculate index
    const total = 7;
    const checks = {
        context: record.DecisionContext.decision_context_summary.length > 10,
        aiInvolvement: !!record.AIInvolvement.ai_system_name && !!record.AIInvolvement.ai_purpose,
        humanInterpretation: record.HumanInterpretation.interpretation_summary.length > 10,
        assumptions: record.AssumptionsAndLimitations.model_limitations.length > 10 || record.AssumptionsAndLimitations.data_assumptions.length > 10,
        risks: record.RisksAndSafeguards.operational_risk.length > 10 || record.RisksAndSafeguards.bias_risk.length > 10,
        safeguards: record.RisksAndSafeguards.mitigation_strategies.length > 10,
        accountability: !!record.DecisionOutcome.accountable_decision_maker && !!record.DecisionOutcome.accountable_role
    };

    const score = Object.values(checks).filter(Boolean).length;
    const percentage = Math.round((score / total) * 100);

    return (
        <div className="traceability-panel" style={{ padding: 'var(--spacing-md)', position: 'sticky', top: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: 'var(--font-size-small)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>Governance Audit</h3>

            <div className="score-container" style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'left' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                        {score}<span style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', fontWeight: 400 }}> / {total}</span>
                    </div>
                </div>
                <div style={{ height: '2px', backgroundColor: 'var(--color-border-default)', borderRadius: '1px', marginTop: 'var(--spacing-sm)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${percentage}%`, backgroundColor: 'var(--color-text-primary)', transition: 'width 0.4s ease' }}></div>
                </div>
                <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)', marginTop: 'var(--spacing-sm)' }}>Traceability Index</p>
            </div>

            <div className="checklist-container" style={{ flex: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {Object.entries(checks).map(([key, passed]) => {
                        const labels: Record<string, string> = {
                            context: 'Context Documented',
                            aiInvolvement: 'AI Involvement Recorded',
                            humanInterpretation: 'Human Interpretation',
                            assumptions: 'Assumptions Captured',
                            risks: 'Risks Identified',
                            safeguards: 'Safeguards Applied',
                            accountability: 'Accountability Assigned'
                        };
                        return (
                            <li key={key} style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', fontSize: 'var(--font-size-meta)' }}>
                                <span style={{ 
                                    width: '16px', 
                                    height: '16px', 
                                    borderRadius: '50%', 
                                    border: passed ? '1.5px solid var(--color-text-primary)' : '1.5px solid var(--color-border-default)',
                                    backgroundColor: passed ? 'var(--color-text-primary)' : 'transparent',
                                    color: passed ? 'white' : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '10px',
                                    flexShrink: 0
                                }}>
                                    {passed ? '✓' : ''}
                                </span>
                                <span style={{ color: passed ? 'var(--color-text-primary)' : 'var(--color-text-secondary)', fontWeight: passed ? 500 : 400 }}>{labels[key]}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--color-border-default)' }}>
                {score === total ? (
                    <div style={{ padding: 'var(--spacing-sm)', backgroundColor: 'var(--color-bg-body)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-text-primary)', color: 'var(--color-text-primary)', fontSize: 'var(--font-size-meta)' }}>
                        <div style={{ fontWeight: 600, marginBottom: '4px' }}>Ready for Review</div>
                        All governance requirements have been met.
                    </div>
                ) : (
                    <div style={{ padding: 'var(--spacing-sm)', backgroundColor: 'var(--color-bg-body)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-meta)' }}>
                        <div style={{ fontWeight: 600, marginBottom: '4px' }}>Draft Status</div>
                        Complete {total - score} more section{total - score > 1 ? 's' : ''} to reach full traceability.
                    </div>
                )}
            </div>
        </div>
    );
}
