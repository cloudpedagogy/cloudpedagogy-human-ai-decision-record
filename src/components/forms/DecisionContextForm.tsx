import { useAppContext } from '../../store/AppContext';
import type { DecisionContext } from '../../types/schema';

export function DecisionContextForm() {
    const { record, updateRecord } = useAppContext();
    const data = record.DecisionContext;

    const handleChange = (field: keyof DecisionContext, value: string) => {
        updateRecord('DecisionContext', field as string, value);
    };

    return (
        <div className="form-section">
            <h2 style={{ fontSize: '1.5rem', color: '#111111', marginBottom: '0.5rem', fontWeight: 700 }}>Decision Context</h2>
            <p style={{ color: '#444444', marginBottom: '2rem', fontSize: '0.95rem' }}>Define the scope and nature of the decision being made.</p>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Decision Context Summary</label>
                    <textarea
                        value={data.decision_context_summary}
                        onChange={(e) => handleChange('decision_context_summary', e.target.value)}
                        rows={4}
                        placeholder="Briefly describe the context in which this decision is taking place..."
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Problem or Question being addressed</label>
                    <input
                        type="text"
                        value={data.problem_or_question}
                        onChange={(e) => handleChange('problem_or_question', e.target.value)}
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Decision Type</label>
                        <select
                            value={data.decision_type}
                            onChange={(e) => handleChange('decision_type', e.target.value)}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', backgroundColor: 'white' }}
                        >
                            <option value="">Select a type...</option>
                            <option value="policy">Policy</option>
                            <option value="operational">Operational</option>
                            <option value="academic">Academic</option>
                            <option value="research">Research</option>
                            <option value="clinical">Clinical</option>
                            <option value="admin">Administrative</option>
                            <option value="governance">Governance</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Impact Level</label>
                        <select
                            value={data.impact_level}
                            onChange={(e) => handleChange('impact_level', e.target.value)}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', backgroundColor: 'white' }}
                        >
                            <option value="">Select impact level...</option>
                            <option value="low">Low Impact</option>
                            <option value="medium">Medium Impact</option>
                            <option value="high">High Impact</option>
                            <option value="critical">Critical Impact</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
