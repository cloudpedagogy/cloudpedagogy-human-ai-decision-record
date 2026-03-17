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
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Review & Reflection</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Reflect on the process to improve future human-AI workflows.</p>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Lessons Learned</label>
                    <textarea
                        value={data.lessons_learned}
                        onChange={(e) => handleChange('lessons_learned', e.target.value)}
                        rows={3}
                        placeholder="What did you learn from using AI in this specific decision context?"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Workflow Improvements</label>
                    <textarea
                        value={data.workflow_improvements}
                        onChange={(e) => handleChange('workflow_improvements', e.target.value)}
                        rows={2}
                        placeholder="How could this process be improved next time?"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Additional Reflection Notes</label>
                    <textarea
                        value={data.reflection_notes}
                        onChange={(e) => handleChange('reflection_notes', e.target.value)}
                        rows={2}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: '#f0fff4', border: '1px solid #c6f6d5', borderRadius: '8px', textAlign: 'center' }}>
                <h4 style={{ color: '#276749', marginBottom: '1rem' }}>Data Entry Complete?</h4>
                <p style={{ fontSize: '0.9rem', color: '#2f855a', marginBottom: '1.5rem' }}>
                    Once all core governance elements are documented, you can preview the formal record and export it for your project files.
                </p>
                <button
                    onClick={() => setCurrentView('preview')}
                    className="btn-primary"
                    style={{ backgroundColor: '#2f855a', color: 'white' }}
                >
                    Go to Record Preview
                </button>
            </div>
        </div>
    );
}
