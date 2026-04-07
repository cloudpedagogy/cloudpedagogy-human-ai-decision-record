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
            <h2 style={{ fontSize: '1.5rem', color: '#111111', marginBottom: '0.5rem', fontWeight: 700 }}>Human Interpretation</h2>
            <p style={{ color: '#444444', marginBottom: '2rem', fontSize: '0.95rem' }}>Reinforce that human judgement remains central. Explain how you interpreted the AI output.</p>

            <div style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.85rem', color: '#444444', margin: 0, lineHeight: '1.5' }}>
                    <strong style={{ color: '#111111', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>Reflection:</strong><br />
                    What expertise was required to interpret this output responsibly? Did you disagree with anything the AI asserted?
                </p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Interpretation of AI Output</label>
                    <textarea
                        value={data.interpretation_summary}
                        onChange={(e) => handleChange('interpretation_summary', e.target.value)}
                        rows={4}
                        placeholder="How did you interpret, accept, frame, or contextualize the AI output?"
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Contextual Knowledge Applied</label>
                    <textarea
                        value={data.contextual_knowledge_applied}
                        onChange={(e) => handleChange('contextual_knowledge_applied', e.target.value)}
                        rows={2}
                        placeholder="What human/institutional knowledge did you add that the AI did not possess?"
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Modifications or Corrections Made</label>
                    <textarea
                        value={data.modifications_or_corrections}
                        onChange={(e) => handleChange('modifications_or_corrections', e.target.value)}
                        rows={2}
                        placeholder="Detail any specific corrections made to the AI's output..."
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Disagreements with AI Output</label>
                    <textarea
                        value={data.disagreements_with_ai}
                        onChange={(e) => handleChange('disagreements_with_ai', e.target.value)}
                        rows={2}
                        placeholder="What parts of the output did you actively reject and why?"
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>
            </div>
        </div>
    );
}
