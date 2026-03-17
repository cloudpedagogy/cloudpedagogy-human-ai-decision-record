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
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Assumptions & Limitations</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Identify assumptions and boundaries relevant to the decision.</p>

            <div style={{ padding: '1rem', backgroundColor: '#ebf8fa', borderRadius: '8px', borderLeft: '4px solid #319795', marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#2c7a7b', margin: 0 }}><strong>Reflection:</strong> What assumptions may not be visible in the AI response? What information was missing?</p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Data Assumptions</label>
                        <textarea
                            value={data.data_assumptions}
                            onChange={(e) => handleChange('data_assumptions', e.target.value)}
                            rows={3}
                            placeholder="What assumptions did you or the AI make about the underlying data?"
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Model Limitations</label>
                        <textarea
                            value={data.model_limitations}
                            onChange={(e) => handleChange('model_limitations', e.target.value)}
                            rows={3}
                            placeholder="What are the known limitations of the specific AI system used?"
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                        />
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Contextual Uncertainties</label>
                    <textarea
                        value={data.contextual_uncertainties}
                        onChange={(e) => handleChange('contextual_uncertainties', e.target.value)}
                        rows={2}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Missing Information</label>
                    <textarea
                        value={data.missing_information}
                        onChange={(e) => handleChange('missing_information', e.target.value)}
                        rows={2}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>
            </div>
        </div>
    );
}
