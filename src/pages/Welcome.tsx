import { useAppContext } from '../store/AppContext';

export function Welcome() {
    const { setCurrentView, resetRecord } = useAppContext();

    const handleStartNew = () => {
        resetRecord();
        setCurrentView('workspace');
    };

    return (
        <div className="welcome-section" style={{ maxWidth: '800px', margin: '4rem auto' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Governance Engineering Workspace</h3>

            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
                Provide a durable, traceable record of decisions influenced by AI. Ensure your reasoning remains transparent, accountable, and defensible.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem', textAlign: 'left' }}>
                <div style={{ padding: '1.5rem', backgroundColor: '#f7fafc', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Why use this tool?</h4>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                        <li>Make AI involvement explicitly visible.</li>
                        <li>Capture human reasoning & interpretation.</li>
                        <li>Document assumptions and identified risks.</li>
                        <li>Ensure unambiguous human accountability.</li>
                    </ul>
                </div>

                <div style={{ padding: '1.5rem', backgroundColor: '#f7fafc', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Privacy & Architecture</h4>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                        <li><strong>Local-First:</strong> All data is stored in your browser.</li>
                        <li><strong>No Tracking:</strong> Zero data leaves your machine.</li>
                        <li><strong>Portability:</strong> Export as JSON, Markdown, or PDF.</li>
                        <li><strong>Governed:</strong> Suitable for sensitive workplace use.</li>
                    </ul>
                </div>
            </div>

            <div className="action-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="btn-primary" onClick={handleStartNew}>Start New Record</button>
                <button className="btn-secondary" onClick={() => setCurrentView('method')}>About CDD Methodology</button>
            </div>
        </div>
    );
}
