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
            <h2 style={{ fontSize: '1.5rem', color: '#111111', marginBottom: '0.5rem', fontWeight: 700 }}>Decision Outcome</h2>
            <p style={{ color: '#444444', marginBottom: '2rem', fontSize: '0.95rem' }}>Capture the final decision and explicitly assign human accountability.</p>

            <div style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.85rem', color: '#444444', margin: 0, lineHeight: '1.5' }}>
                    <strong style={{ color: '#111111', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>Reflection:</strong><br />
                    Who owns this decision? If the AI's contribution leads to a flawed outcome, who is responsible for the remedy?
                </p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Final Decision</label>
                    <textarea
                        value={data.final_decision}
                        onChange={(e) => handleChange('final_decision', e.target.value)}
                        rows={3}
                        placeholder="State the final decision clearly..."
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Rationale for Decision</label>
                    <textarea
                        value={data.rationale}
                        onChange={(e) => handleChange('rationale', e.target.value)}
                        rows={3}
                        placeholder="Why was this decision reached? (Synthesizing context, AI input, and human interpretation)"
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div style={{ padding: '1.25rem', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#ffffff' }}>
                    <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#111111', marginBottom: '1rem' }}>Accountability</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Accountable Decision-Maker</label>
                            <input
                                type="text"
                                value={data.accountable_decision_maker}
                                onChange={(e) => handleChange('accountable_decision_maker', e.target.value)}
                                placeholder="Name of the person responsible"
                                style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Accountable Role</label>
                            <input
                                type="text"
                                value={data.accountable_role}
                                onChange={(e) => handleChange('accountable_role', e.target.value)}
                                placeholder="Job title or institutional role"
                                style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem' }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                    <input
                        type="checkbox"
                        id="approval"
                        checked={data.approval_required}
                        onChange={(e) => handleChange('approval_required', e.target.checked)}
                        style={{ width: '1rem', height: '1rem', accentColor: '#111111' }}
                    />
                    <label htmlFor="approval" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111111' }}>Formal Approval Required?</label>
                </div>

                {data.approval_required && (
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Approver Name/Role</label>
                        <input
                            type="text"
                            value={data.approver_name_or_role}
                            onChange={(e) => handleChange('approver_name_or_role', e.target.value)}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem' }}
                        />
                    </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Implementation Considerations</label>
                        <textarea
                            value={data.implementation_considerations}
                            onChange={(e) => handleChange('implementation_considerations', e.target.value)}
                            rows={2}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Follow-up Actions</label>
                        <textarea
                            value={data.follow_up_actions}
                            onChange={(e) => handleChange('follow_up_actions', e.target.value)}
                            rows={2}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
