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
            <h3 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666666', marginBottom: '1.5rem' }}>Governance Audit</h3>

            <div className="score-container" style={{ marginBottom: '2rem', textAlign: 'left' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111111' }}>
                        {score}<span style={{ fontSize: '1rem', color: '#666666', fontWeight: 400 }}> / {total}</span>
                    </div>
                </div>
                <div style={{ height: '2px', backgroundColor: '#e5e7eb', borderRadius: '1px', marginTop: '0.5rem', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${percentage}%`, backgroundColor: '#111111', transition: 'width 0.4s ease' }}></div>
                </div>
                <p style={{ fontSize: '0.7rem', color: '#666666', marginTop: '0.5rem' }}>Traceability Index</p>
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
                            <li key={key} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem' }}>
                                <span style={{ 
                                    width: '16px', 
                                    height: '16px', 
                                    borderRadius: '50%', 
                                    border: passed ? '1.5px solid #111111' : '1.5px solid #e5e7eb',
                                    backgroundColor: passed ? '#111111' : 'transparent',
                                    color: passed ? 'white' : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.6rem',
                                    flexShrink: 0
                                }}>
                                    {passed ? '✓' : ''}
                                </span>
                                <span style={{ color: passed ? '#111111' : '#666666', fontWeight: passed ? 500 : 400 }}>{labels[key]}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
                {score === total ? (
                    <div style={{ padding: '0.75rem', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px solid #111111', color: '#111111', fontSize: '0.75rem' }}>
                        <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Ready for Review</div>
                        All governance requirements have been met.
                    </div>
                ) : (
                    <div style={{ padding: '0.75rem', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px solid #e5e7eb', color: '#444444', fontSize: '0.75rem' }}>
                        <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Draft Status</div>
                        Complete {total - score} more section{total - score > 1 ? 's' : ''} to reach full traceability.
                    </div>
                )}
            </div>
        </div>
    );
}
