import { useAppContext } from '../../store/AppContext';
import type { RisksAndSafeguards } from '../../types/schema';

export function RisksForm() {
    const { record, updateRecord } = useAppContext();
    const data = record.RisksAndSafeguards;

    const handleChange = (field: keyof RisksAndSafeguards, value: string | boolean) => {
        updateRecord('RisksAndSafeguards', field as string, value);
    };

    return (
        <div className="form-section">
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Risks & Safeguards</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Identify relevant risks and describe the mitigation steps taken.</p>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Bias Risk</label>
                        <textarea
                            value={data.bias_risk}
                            onChange={(e) => handleChange('bias_risk', e.target.value)}
                            rows={2}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Operational Risk</label>
                        <textarea
                            value={data.operational_risk}
                            onChange={(e) => handleChange('operational_risk', e.target.value)}
                            rows={2}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Privacy Concerns</label>
                        <textarea
                            value={data.privacy_concerns}
                            onChange={(e) => handleChange('privacy_concerns', e.target.value)}
                            rows={2}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Governance / Legal Risk</label>
                        <textarea
                            value={data.governance_risk}
                            onChange={(e) => handleChange('governance_risk', e.target.value)}
                            rows={2}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                        />
                    </div>
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Mitigation Strategies *</label>
                    <textarea
                        value={data.mitigation_strategies}
                        onChange={(e) => handleChange('mitigation_strategies', e.target.value)}
                        rows={3}
                        placeholder="How are the identified risks being mitigated?"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                    <input
                        type="checkbox"
                        id="escalation"
                        checked={data.escalation_required}
                        onChange={(e) => handleChange('escalation_required', e.target.checked)}
                        style={{ width: '1.2rem', height: '1.2rem' }}
                    />
                    <label htmlFor="escalation" style={{ fontWeight: 600 }}>Escalation Required?</label>
                </div>

                {data.escalation_required && (
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-danger)' }}>Escalation Notes</label>
                        <textarea
                            value={data.escalation_notes}
                            onChange={(e) => handleChange('escalation_notes', e.target.value)}
                            rows={2}
                            placeholder="Detail the escalation path or requirements..."
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
