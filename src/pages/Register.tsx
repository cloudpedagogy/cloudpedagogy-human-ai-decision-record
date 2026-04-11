import { useAppContext } from '../store/AppContext';
import { calculateAuditScore } from '../utils/auditUtils';

export function Register() {
    const { recordList, setCurrentView, setFullRecord, deleteFromRegister } = useAppContext();

    return (
        <div className="register-container">
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#111111', marginBottom: '0.5rem' }}>Decision Register</h1>
                <p style={{ color: '#666666', fontSize: '1rem' }}>A structured log of all human–AI decisions maintained in this session.</p>
            </div>

            <div style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                    <thead style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                        <tr>
                            <th style={{ padding: '1rem', fontWeight: 600, color: '#4b5563' }}>Title</th>
                            <th style={{ padding: '1rem', fontWeight: 600, color: '#4b5563' }}>Step ID</th>
                            <th style={{ padding: '1rem', fontWeight: 600, color: '#4b5563' }}>Criticality</th>
                            <th style={{ padding: '1rem', fontWeight: 600, color: '#4b5563' }}>Audit Score</th>
                            <th style={{ padding: '1rem', fontWeight: 600, color: '#4b5563', textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recordList.length === 0 ? (
                            <tr>
                                <td colSpan={5} style={{ padding: '3rem', textAlign: 'center', color: '#9ca3af' }}>
                                    No decisions recorded yet. Go to Workspace to create one.
                                </td>
                            </tr>
                        ) : (
                            recordList.map((record) => {
                                const score = calculateAuditScore(record);
                                return (
                                    <tr key={record.Metadata.record_id} style={{ borderBottom: '1px solid #f3f4f6', transition: 'background 0.1s' }}>
                                        <td style={{ padding: '1rem', fontWeight: 500, color: '#111111' }}>{record.Metadata.record_title || 'Untitled'}</td>
                                        <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#6b7280' }}>{record.Metadata.workflow_step_id || '-'}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{ 
                                                textTransform: 'capitalize', 
                                                padding: '2px 8px', 
                                                borderRadius: '4px', 
                                                fontSize: '0.75rem',
                                                backgroundColor: record.DecisionContext.impact_level === 'high' || record.DecisionContext.impact_level === 'critical' ? '#FEE2E2' : '#F3F4F6',
                                                color: record.DecisionContext.impact_level === 'high' || record.DecisionContext.impact_level === 'critical' ? '#991B1B' : '#4B5563'
                                            }}>
                                                {record.DecisionContext.impact_level || 'Not Set'}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <div style={{ flex: 1, height: '4px', backgroundColor: '#E5E7EB', borderRadius: '2px', minWidth: '60px' }}>
                                                    <div style={{ height: '100%', width: `${score}%`, backgroundColor: score === 100 ? '#10B981' : '#F59E0B', borderRadius: '2px' }}></div>
                                                </div>
                                                <span>{score}%</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'right' }}>
                                            <button 
                                                onClick={() => {
                                                    setFullRecord(record);
                                                    setCurrentView('workspace');
                                                }}
                                                style={{ border: 'none', background: 'none', color: '#2563EB', cursor: 'pointer', marginRight: '1rem', fontSize: '0.85rem' }}
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                onClick={() => {
                                                    if (confirm('Are you sure you want to delete this record?')) {
                                                        deleteFromRegister(record.Metadata.record_id);
                                                    }
                                                }}
                                                style={{ border: 'none', background: 'none', color: '#DC2626', cursor: 'pointer', fontSize: '0.85rem' }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: 'var(--spacing-xl)', display: 'flex', gap: '1rem' }}>
                <button 
                    onClick={() => setCurrentView('workspace')} 
                    className="btn btn-secondary"
                >
                    Back to Workspace
                </button>
            </div>
        </div>
    );
}
