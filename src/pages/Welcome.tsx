import { useAppContext } from '../store/AppContext';

export function Welcome() {
    const { setCurrentView, resetRecord } = useAppContext();

    const handleStartNew = () => {
        resetRecord();
        setCurrentView('workspace');
    };

    return (
        <div className="welcome-section" style={{ maxWidth: '800px', margin: '2rem auto' }}>
            <h1 style={{ fontSize: '2rem', color: '#111111', marginBottom: '1.5rem', fontWeight: 700 }}>Governance Engineering Workspace</h1>

            <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#444444', lineHeight: '1.6' }}>
                Provide a durable, traceable record of decisions influenced by AI. Ensure your reasoning remains transparent, accountable, and defensible.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem', textAlign: 'left' }}>
                <div style={{ padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#111111' }}>Decision Logic</h2>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#444444', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#666666' }}>·</span> Make AI involvement explicitly visible</li>
                        <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#666666' }}>·</span> Capture human reasoning & interpretation</li>
                        <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#666666' }}>·</span> Document assumptions and identified risks</li>
                        <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#666666' }}>·</span> Ensure unambiguous human accountability</li>
                    </ul>
                </div>

                <div style={{ padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#111111' }}>Architecture</h2>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#444444', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#666666' }}>·</span> <strong>Local-First:</strong> Data is stored in your browser</li>
                        <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#666666' }}>·</span> <strong>No Tracking:</strong> Zero data leaves your machine</li>
                        <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#666666' }}>·</span> <strong>Portability:</strong> Export as JSON or Markdown</li>
                        <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: '#666666' }}>·</span> <strong>Governed:</strong> Suitable for sensitive workplace use</li>
                    </ul>
                </div>
            </div>

            <div className="action-buttons" style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn-primary" onClick={handleStartNew}>Start New Record</button>
                <button className="btn-secondary" onClick={() => setCurrentView('method')}>About CDD Methodology</button>
            </div>
        </div>
    );
}
