import { useAppContext } from '../../store/AppContext';
import type { AssumptionsAndLimitations } from '../../types/schema';

export function AssumptionsForm() {
    const { record, updateRecord } = useAppContext();
    const data = record.AssumptionsAndLimitations;

    const handleChange = (field: keyof AssumptionsAndLimitations, value: string) => {
        updateRecord('AssumptionsAndLimitations', field as string, value);
    };

    return (
        <div className="form-section">
            <h2 style={{ fontSize: '1.5rem', color: '#111111', marginBottom: '0.5rem', fontWeight: 700 }}>Assumptions & Limitations</h2>
            <p style={{ color: '#444444', marginBottom: '2rem', fontSize: '0.95rem' }}>Identify assumptions and boundaries relevant to the decision.</p>

            <div style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.85rem', color: '#444444', margin: 0, lineHeight: '1.5' }}>
                    <strong style={{ color: '#111111', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>Reflection:</strong><br />
                    What assumptions may not be visible in the AI response? What information was missing?
                </p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Data Assumptions</label>
                        <textarea
                            value={data.data_assumptions}
                            onChange={(e) => handleChange('data_assumptions', e.target.value)}
                            rows={3}
                            placeholder="What assumptions did you or the AI make about the underlying data?"
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Model Limitations</label>
                        <textarea
                            value={data.model_limitations}
                            onChange={(e) => handleChange('model_limitations', e.target.value)}
                            rows={3}
                            placeholder="What are the known limitations of the specific AI system used?"
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                        />
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Contextual Uncertainties</label>
                    <textarea
                        value={data.contextual_uncertainties}
                        onChange={(e) => handleChange('contextual_uncertainties', e.target.value)}
                        rows={2}
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Missing Information</label>
                    <textarea
                        value={data.missing_information}
                        onChange={(e) => handleChange('missing_information', e.target.value)}
                        rows={2}
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>
            </div>
        </div>
    );
}
