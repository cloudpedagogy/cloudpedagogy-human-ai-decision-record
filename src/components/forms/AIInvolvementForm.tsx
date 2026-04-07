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
            <h2 style={{ fontSize: '1.5rem', color: '#111111', marginBottom: '0.5rem', fontWeight: 700 }}>AI Involvement</h2>
            <p style={{ color: '#444444', marginBottom: '2rem', fontSize: '0.95rem' }}>Make AI involvement explicit and reviewable.</p>

            <div style={{ padding: '1.25rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.85rem', color: '#444444', margin: 0, lineHeight: '1.5' }}>
                    <strong style={{ color: '#111111', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>Reflection:</strong><br />
                    What specific capability gap were you using the AI to fill? Were you seeking a summary, a classification, a recommendation, or generation?
                </p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>AI System Name</label>
                        <input
                            type="text"
                            value={data.ai_system_name}
                            onChange={(e) => handleChange('ai_system_name', e.target.value)}
                            placeholder="e.g., ChatGPT (GPT-4o), Gemini Advanced"
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>AI System Type</label>
                        <input
                            type="text"
                            value={data.ai_system_type}
                            onChange={(e) => handleChange('ai_system_type', e.target.value)}
                            placeholder="e.g., LLM, Predictive Model, Custom Agent"
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem' }}
                        />
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Purpose of AI Use</label>
                    <input
                        type="text"
                        value={data.ai_purpose}
                        onChange={(e) => handleChange('ai_purpose', e.target.value)}
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Prompt or Instruction Summary</label>
                    <textarea
                        value={data.prompt_summary}
                        onChange={(e) => handleChange('prompt_summary', e.target.value)}
                        rows={3}
                        placeholder="Summarize the prompt or instructions given to the AI..."
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>AI Output Summary</label>
                    <textarea
                        value={data.ai_output_summary}
                        onChange={(e) => handleChange('ai_output_summary', e.target.value)}
                        rows={3}
                        placeholder="Summarize what the AI produced in response..."
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Level of Reliance</label>
                        <select
                            value={data.reliance_level}
                            onChange={(e) => handleChange('reliance_level', e.target.value)}
                            style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', backgroundColor: 'white' }}
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
