import { useAppContext } from '../../store/AppContext';
import type { DecisionOutcome } from '../../types/schema';

export function DecisionOutcomeForm() {
    const { record, updateRecord } = useAppContext();
    const data = record.DecisionOutcome;

    const handleChange = (field: keyof DecisionOutcome, value: string | boolean) => {
        updateRecord('DecisionOutcome', field as string, value);
    };

    return (
        <div className="form-section">
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Decision Outcome</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Capture the final decision and explicitly assign human accountability.</p>

            <div style={{ padding: '1rem', backgroundColor: '#ebf8fa', borderRadius: '8px', borderLeft: '4px solid #319795', marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#2c7a7b', margin: 0 }}><strong>Reflection:</strong> Who owns this decision? If the AI's contribution leads to a flawed outcome, who is responsible for the remedy?</p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Final Decision *</label>
                    <textarea
                        value={data.final_decision}
                        onChange={(e) => handleChange('final_decision', e.target.value)}
                        rows={3}
                        placeholder="State the final decision clearly..."
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Rationale for Decision</label>
                    <textarea
                        value={data.rationale}
                        onChange={(e) => handleChange('rationale', e.target.value)}
                        rows={3}
                        placeholder="Why was this decision reached? (Synthesizing context, AI input, and human interpretation)"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: '#fdfdfd' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Accountability</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Accountable Decision-Maker *</label>
                            <input
                                type="text"
                                value={data.accountable_decision_maker}
                                onChange={(e) => handleChange('accountable_decision_maker', e.target.value)}
                                placeholder="Name of the person responsible"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Accountable Role *</label>
                            <input
                                type="text"
                                value={data.accountable_role}
                                onChange={(e) => handleChange('accountable_role', e.target.value)}
                                placeholder="Job title or institutional role"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                    <input
                        type="checkbox"
                        id="approval"
                        checked={data.approval_required}
                        onChange={(e) => handleChange('approval_required', e.target.checked)}
                        style={{ width: '1.2rem', height: '1.2rem' }}
                    />
                    <label htmlFor="approval" style={{ fontWeight: 600 }}>Formal Approval Required?</label>
                </div>

                {data.approval_required && (
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Approver Name/Role</label>
                        <input
                            type="text"
                            value={data.approver_name_or_role}
                            onChange={(e) => handleChange('approver_name_or_role', e.target.value)}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                        />
                    </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Implementation Considerations</label>
                        <textarea
                            value={data.implementation_considerations}
                            onChange={(e) => handleChange('implementation_considerations', e.target.value)}
                            rows={2}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Follow-up Actions</label>
                        <textarea
                            value={data.follow_up_actions}
                            onChange={(e) => handleChange('follow_up_actions', e.target.value)}
                            rows={2}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
