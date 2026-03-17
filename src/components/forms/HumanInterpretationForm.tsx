import { useAppContext } from '../../store/AppContext';
import type { HumanInterpretation } from '../../types/schema';

export function HumanInterpretationForm() {
    const { record, updateRecord } = useAppContext();
    const data = record.HumanInterpretation;

    const handleChange = (field: keyof HumanInterpretation, value: string) => {
        updateRecord('HumanInterpretation', field as string, value);
    };

    return (
        <div className="form-section">
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Human Interpretation</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Reinforce that human judgement remains central. Explain how you interpreted the AI output.</p>

            <div style={{ padding: '1rem', backgroundColor: '#ebf8fa', borderRadius: '8px', borderLeft: '4px solid #319795', marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#2c7a7b', margin: 0 }}><strong>Reflection:</strong> What expertise was required to interpret this output responsibly? Did you disagree with anything the AI asserted?</p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Interpretation of AI Output *</label>
                    <textarea
                        value={data.interpretation_summary}
                        onChange={(e) => handleChange('interpretation_summary', e.target.value)}
                        rows={4}
                        placeholder="How did you interpret, accept, frame, or contextualize the AI output?"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Contextual Knowledge Applied</label>
                    <textarea
                        value={data.contextual_knowledge_applied}
                        onChange={(e) => handleChange('contextual_knowledge_applied', e.target.value)}
                        rows={2}
                        placeholder="What human/institutional knowledge did you add that the AI did not possess?"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Modifications or Corrections Made</label>
                    <textarea
                        value={data.modifications_or_corrections}
                        onChange={(e) => handleChange('modifications_or_corrections', e.target.value)}
                        rows={2}
                        placeholder="Detail any specific corrections made to the AI's output..."
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Disagreements with AI Output</label>
                    <textarea
                        value={data.disagreements_with_ai}
                        onChange={(e) => handleChange('disagreements_with_ai', e.target.value)}
                        rows={2}
                        placeholder="What parts of the output did you actively reject and why?"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>
            </div>
        </div>
    );
}
