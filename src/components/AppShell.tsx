import { useAppContext } from '../store/AppContext';
import { Sidebar } from './Sidebar';
import { TraceabilityPanel } from './TraceabilityPanel';

export function AppShell({ children }: { children: React.ReactNode }) {
    const { currentView } = useAppContext();

    return (
        <div className="app-shell" style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <header className="app-header" style={{ 
                flexShrink: 0, 
                padding: '1rem 2rem', 
                borderBottom: '1px solid var(--color-border)',
                backgroundColor: '#ffffff'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1160px', margin: '0 auto', width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <a href="https://www.cloudpedagogy.com/" target="_blank" rel="noopener noreferrer" style={{ 
                            textDecoration: 'none', 
                            color: '#111111', 
                            fontWeight: 500,
                            fontSize: '0.9rem'
                        }}>
                            CloudPedagogy
                        </a>
                        <span style={{ color: '#e5e7eb' }}>/</span>
                        <span style={{ 
                            fontSize: '0.9rem', 
                            color: '#444444',
                            fontWeight: 400
                        }}>
                            Human-AI Decision Record
                        </span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#666666' }}>
                        100% Private · Local-only
                    </div>
                </div>
            </header>

            <div className="app-body" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                {currentView === 'workspace' && (
                    <aside className="app-sidebar" style={{ width: '260px', borderRight: '1px solid var(--color-border)', backgroundColor: '#ffffff', overflowY: 'auto' }}>
                        <Sidebar />
                    </aside>
                )}

                <main className="app-main-content" style={{ flex: 1, padding: '2.5rem', overflowY: 'auto', backgroundColor: '#ffffff' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {children}
                    </div>
                </main>

                {(currentView === 'workspace' || currentView === 'preview') && (
                    <aside className="app-traceability" style={{ width: '320px', borderLeft: '1px solid var(--color-border)', backgroundColor: '#ffffff', overflowY: 'auto' }}>
                        <TraceabilityPanel />
                    </aside>
                )}
            </div>

            <footer style={{ 
                padding: '1.5rem 2rem', 
                borderTop: '1px solid var(--color-border)', 
                textAlign: 'center',
                backgroundColor: '#ffffff'
            }}>
                <p style={{ fontSize: '0.75rem', color: '#666666' }}>
                    CloudPedagogy · Governance-ready AI and curriculum systems
                </p>
            </footer>
        </div>
    );
}
