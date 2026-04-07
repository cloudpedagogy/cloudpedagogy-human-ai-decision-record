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
            <h2 style={{ fontSize: '1.5rem', color: '#111111', marginBottom: '0.5rem', fontWeight: 700 }}>Risks & Safeguards</h2>
            <p style={{ color: '#444444', marginBottom: '2rem', fontSize: '0.95rem' }}>Identify relevant risks and describe the mitigation steps taken.</p>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Bias Risk</label>
                        <textarea
                            value={data.bias_risk}
                            onChange={(e) => handleChange('bias_risk', e.target.value)}
                            rows={2}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Operational Risk</label>
                        <textarea
                            value={data.operational_risk}
                            onChange={(e) => handleChange('operational_risk', e.target.value)}
                            rows={2}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Privacy Concerns</label>
                        <textarea
                            value={data.privacy_concerns}
                            onChange={(e) => handleChange('privacy_concerns', e.target.value)}
                            rows={2}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Governance / Legal Risk</label>
                        <textarea
                            value={data.governance_risk}
                            onChange={(e) => handleChange('governance_risk', e.target.value)}
                            rows={2}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                        />
                    </div>
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #111111' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Mitigation Strategies</label>
                    <textarea
                        value={data.mitigation_strategies}
                        onChange={(e) => handleChange('mitigation_strategies', e.target.value)}
                        rows={3}
                        placeholder="How are the identified risks being mitigated?"
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                    <input
                        type="checkbox"
                        id="escalation"
                        checked={data.escalation_required}
                        onChange={(e) => handleChange('escalation_required', e.target.checked)}
                        style={{ width: '1rem', height: '1rem', accentColor: '#111111' }}
                    />
                    <label htmlFor="escalation" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111111' }}>Escalation Required?</label>
                </div>

                {data.escalation_required && (
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Escalation Notes</label>
                        <textarea
                            value={data.escalation_notes}
                            onChange={(e) => handleChange('escalation_notes', e.target.value)}
                            rows={2}
                            placeholder="Detail the escalation path or requirements..."
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #111111', fontSize: '0.9rem', fontFamily: 'inherit' }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
