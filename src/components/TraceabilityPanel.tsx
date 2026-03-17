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
        <div className="traceability-panel" style={{ padding: '1.5rem', position: 'sticky', top: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Governance Audit</h3>

            <div className="score-container" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: score === total ? 'var(--color-success)' : 'var(--color-text-main)' }}>
                        {score}<span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 400 }}> / {total}</span>
                    </div>
                </div>
                <div style={{ height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px', marginTop: '0.5rem', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${percentage}%`, backgroundColor: score === total ? 'var(--color-success)' : 'var(--color-primary)', transition: 'width 0.4s ease' }}></div>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Traceability Index</p>
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
                            <li key={key} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.85rem' }}>
                                <span style={{ 
                                    width: '18px', 
                                    height: '18px', 
                                    borderRadius: '50%', 
                                    backgroundColor: passed ? 'var(--color-success)' : '#f1f5f9', 
                                    color: passed ? 'white' : '#cbd5e1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.6rem',
                                    marginTop: '1px',
                                    flexShrink: 0
                                }}>
                                    {passed ? '✓' : '○'}
                                </span>
                                <span style={{ color: passed ? 'var(--color-text-main)' : 'var(--color-text-muted)' }}>{labels[key]}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                {score === total ? (
                    <div style={{ padding: '0.875rem', backgroundColor: '#f0fff4', borderRadius: 'var(--radius-md)', border: '1px solid #c6f6d5', color: '#166534', fontSize: '0.8rem' }}>
                        <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Audit Pass</div>
                        Record meets minimum governance standards for export.
                    </div>
                ) : (
                    <div style={{ padding: '0.875rem', backgroundColor: '#fff7ed', borderRadius: 'var(--radius-md)', border: '1px solid #ffedd5', color: '#9a3412', fontSize: '0.8rem' }}>
                        <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Audit Pending</div>
                        Complete {total - score} more section{total - score > 1 ? 's' : ''} to reach full traceability.
                    </div>
                )}
            </div>
        </div>
    );
}
