import { useAppContext } from '../../store/AppContext';
import type { AIInvolvement } from '../../types/schema';

export function AIInvolvementForm() {
    const { record, updateRecord } = useAppContext();
    const data = record.AIInvolvement;

    const handleChange = (field: keyof AIInvolvement, value: string | boolean) => {
        updateRecord('AIInvolvement', field as string, value);
    };

    return (
        <div className="form-section">
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>AI Involvement</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Make AI involvement explicit and reviewable.</p>

            <div style={{ padding: '1rem', backgroundColor: '#ebf8fa', borderRadius: '8px', borderLeft: '4px solid #319795', marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#2c7a7b', margin: 0 }}><strong>Reflection:</strong> What specific capability gap were you using the AI to fill? Were you seeking a summary, a classification, a recommendation, or generation?</p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>AI System Name *</label>
                        <input
                            type="text"
                            value={data.ai_system_name}
                            onChange={(e) => handleChange('ai_system_name', e.target.value)}
                            placeholder="e.g., ChatGPT (GPT-4o), Gemini Advanced"
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>AI System Type</label>
                        <input
                            type="text"
                            value={data.ai_system_type}
                            onChange={(e) => handleChange('ai_system_type', e.target.value)}
                            placeholder="e.g., LLM, Predictive Model, Custom Agent"
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                        />
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Purpose of AI Use *</label>
                    <input
                        type="text"
                        value={data.ai_purpose}
                        onChange={(e) => handleChange('ai_purpose', e.target.value)}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Prompt or Instruction Summary</label>
                    <textarea
                        value={data.prompt_summary}
                        onChange={(e) => handleChange('prompt_summary', e.target.value)}
                        rows={3}
                        placeholder="Summarize the prompt or instructions given to the AI..."
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>AI Output Summary</label>
                    <textarea
                        value={data.ai_output_summary}
                        onChange={(e) => handleChange('ai_output_summary', e.target.value)}
                        rows={3}
                        placeholder="Summarize what the AI produced in response..."
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Level of Reliance</label>
                        <select
                            value={data.reliance_level}
                            onChange={(e) => handleChange('reliance_level', e.target.value)}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', backgroundColor: 'white' }}
                        >
                            <option value="">Select reliance level...</option>
                            <option value="low">Low - Used merely as a sounding board</option>
                            <option value="moderate">Moderate - Used for drafting/analysis but heavily reviewed</option>
                            <option value="high">High - Relied upon heavily for the final direction</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
