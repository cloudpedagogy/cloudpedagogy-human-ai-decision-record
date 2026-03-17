import { useAppContext } from '../store/AppContext';
import { Sidebar } from './Sidebar';
import { TraceabilityPanel } from './TraceabilityPanel';

export function AppShell({ children }: { children: React.ReactNode }) {
    const { currentView } = useAppContext();

    return (
        <div className="app-shell" style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <header className="app-header" style={{ flexShrink: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1>Human-AI Decision Record Tool</h1>
                    </div>
                    <div className="header-actions" title="This application runs entirely in your browser. No data is sent to external servers.">
                        <span className="badge" style={{ backgroundColor: '#EDFdf8', color: '#0d9488', border: '1px solid #99f6e4', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600 }}>100% Private (Runs Locally)</span>
                    </div>
                </div>
            </header>

            <div className="app-body" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                {currentView === 'workspace' && (
                    <aside className="app-sidebar" style={{ width: '250px', borderRight: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-panel)', overflowY: 'auto' }}>
                        <Sidebar />
                    </aside>
                )}

                <main className="app-main-content" style={{ flex: 1, padding: '2rem', overflowY: 'auto', backgroundColor: 'var(--color-bg-body)' }}>
                    {children}
                </main>

                {(currentView === 'workspace' || currentView === 'preview') && (
                    <aside className="app-traceability" style={{ width: '300px', borderLeft: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-panel)', overflowY: 'auto' }}>
                        <TraceabilityPanel />
                    </aside>
                )}
            </div>
        </div>
    );
}
