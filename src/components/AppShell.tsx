import { useAppContext } from '../store/AppContext';
import { Sidebar } from './Sidebar';
import { TraceabilityPanel } from './TraceabilityPanel';

export function AppShell({ children }: { children: React.ReactNode }) {
    const { currentView } = useAppContext();

    return (
        <div className="app-shell" style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <header className="app-header" style={{ 
                flexShrink: 0, 
                padding: 'var(--spacing-md) var(--spacing-lg)', 
                borderBottom: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-bg-body)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1160px', margin: '0 auto', width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <a href="https://www.cloudpedagogy.com/" target="_blank" rel="noopener noreferrer" style={{ 
                            textDecoration: 'underline', 
                            color: 'var(--color-text-primary)', 
                            fontWeight: 500,
                            fontSize: 'var(--font-size-meta)'
                        }}>
                            CloudPedagogy
                        </a>
                        <span style={{ color: 'var(--color-border-default)' }}>/</span>
                        <span style={{ 
                            fontSize: 'var(--font-size-meta)', 
                            color: 'var(--color-text-secondary)',
                            fontWeight: 400
                        }}>
                            Human-AI Decision Record
                        </span>
                    </div>
                    <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)' }}>
                        100% Private · Local-only
                    </div>
                </div>
            </header>

            <div className="app-body" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                {currentView === 'workspace' && (
                    <aside className="app-sidebar" style={{ width: '260px', borderRight: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-bg-body)', overflowY: 'auto' }}>
                        <Sidebar />
                    </aside>
                )}

                {currentView === 'register' && (
                    <aside className="app-sidebar" style={{ width: '260px', borderRight: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-bg-body)', overflowY: 'auto' }}>
                        <Sidebar />
                    </aside>
                )}

                <main className="app-main-content" style={{ flex: 1, padding: 'var(--spacing-lg)', overflowY: 'auto', backgroundColor: 'var(--color-bg-body)' }}>
                    <div style={{ maxWidth: currentView === 'register' ? '1160px' : '800px', margin: '0 auto' }}>
                        {children}
                    </div>
                </main>

                {(currentView === 'workspace' || currentView === 'preview') && (
                    <aside className="app-traceability" style={{ width: '320px', borderLeft: '1px solid var(--color-border-default)', backgroundColor: 'var(--color-bg-body)', overflowY: 'auto' }}>
                        <TraceabilityPanel />
                    </aside>
                )}
            </div>

            <footer style={{ 
                padding: 'var(--spacing-lg) var(--spacing-lg)', 
                borderTop: '1px solid var(--color-border-default)', 
                textAlign: 'center',
                backgroundColor: 'var(--color-bg-body)'
            }}>
                <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)' }}>
                    CloudPedagogy · Governance-ready AI and curriculum systems
                </p>
            </footer>
        </div>
    );
}
