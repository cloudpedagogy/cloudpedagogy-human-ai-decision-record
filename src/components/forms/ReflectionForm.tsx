import { useAppContext } from '../../store/AppContext';
import type { Reflection } from '../../types/schema';

export function ReflectionForm() {
    const { record, updateRecord, setCurrentView } = useAppContext();
    const data = record.Reflection;

    const handleChange = (field: keyof Reflection, value: string) => {
        updateRecord('Reflection', field as string, value);
    };

    return (
        <div className="form-section">
            <h2 style={{ fontSize: '1.5rem', color: '#111111', marginBottom: '0.5rem', fontWeight: 700 }}>Review & Reflection</h2>
            <p style={{ color: '#444444', marginBottom: '2.5rem', fontSize: '0.95rem' }}>Reflect on the process to improve future human-AI workflows.</p>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Lessons Learned</label>
                    <textarea
                        value={data.lessons_learned}
                        onChange={(e) => handleChange('lessons_learned', e.target.value)}
                        rows={3}
                        placeholder="What did you learn from using AI in this specific decision context?"
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Workflow Improvements</label>
                    <textarea
                        value={data.workflow_improvements}
                        onChange={(e) => handleChange('workflow_improvements', e.target.value)}
                        rows={2}
                        placeholder="How could this process be improved next time?"
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#111111' }}>Additional Reflection Notes</label>
                    <textarea
                        value={data.reflection_notes}
                        onChange={(e) => handleChange('reflection_notes', e.target.value)}
                        rows={2}
                        style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                </div>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: '#ffffff', border: '1.5px solid #111111', borderRadius: '8px', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>Data Entry Complete</h3>
                <p style={{ fontSize: '0.85rem', color: '#444444', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                    Once all core governance elements are documented, you can preview the formal record and export it for your project files.
                </p>
                <button
                    onClick={() => setCurrentView('preview')}
                    className="btn-primary"
                >
                    Go to Record Preview
                </button>
            </div>
        </div>
    );
}
