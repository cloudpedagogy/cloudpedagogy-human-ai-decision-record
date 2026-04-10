import { useAppContext } from '../store/AppContext';

export function Welcome() {
    const { setCurrentView, resetRecord } = useAppContext();

    const handleStartNew = () => {
        resetRecord();
        setCurrentView('workspace');
    };

    return (
        <div className="welcome-section" style={{ maxWidth: '800px', margin: 'var(--spacing-lg) auto' }}>
            <h1 style={{ fontSize: '2rem', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-md)', fontWeight: 700 }}>Governance Engineering Workspace</h1>

            <p style={{ fontSize: 'var(--font-size-body)', marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Provide a durable, traceable record of decisions influenced by AI. Ensure your reasoning remains transparent, accountable, and defensible.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)', textAlign: 'left' }}>
                <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-bg-body)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-default)' }}>
                    <h2 style={{ fontSize: 'var(--font-size-body)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--color-text-primary)' }}>Decision Logic</h2>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 'var(--font-size-meta)', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                        <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}><span style={{ color: 'var(--color-text-secondary)' }}>·</span> Make AI involvement explicitly visible</li>
                        <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}><span style={{ color: 'var(--color-text-secondary)' }}>·</span> Capture human reasoning & interpretation</li>
                        <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}><span style={{ color: 'var(--color-text-secondary)' }}>·</span> Document assumptions and identified risks</li>
                        <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}><span style={{ color: 'var(--color-text-secondary)' }}>·</span> Ensure unambiguous human accountability</li>
                    </ul>
                </div>

                <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-bg-body)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-default)' }}>
                    <h2 style={{ fontSize: 'var(--font-size-body)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--color-text-primary)' }}>Architecture</h2>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 'var(--font-size-meta)', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                        <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}><span style={{ color: 'var(--color-text-secondary)' }}>·</span> <strong>Local-First:</strong> Data is stored in your browser</li>
                        <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}><span style={{ color: 'var(--color-text-secondary)' }}>·</span> <strong>No Tracking:</strong> Zero data leaves your machine</li>
                        <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}><span style={{ color: 'var(--color-text-secondary)' }}>·</span> <strong>Portability:</strong> Export as JSON or Markdown</li>
                        <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}><span style={{ color: 'var(--color-text-secondary)' }}>·</span> <strong>Governed:</strong> Suitable for sensitive workplace use</li>
                    </ul>
                </div>
            </div>

            <div className="action-buttons" style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                <button className="btn-primary" onClick={handleStartNew}>Start New Record</button>
                <button className="btn-secondary" onClick={() => setCurrentView('method')}>About CDD Methodology</button>
            </div>
        </div>
    );
}
