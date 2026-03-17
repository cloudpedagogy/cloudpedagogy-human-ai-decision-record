import { AppShell } from './components/AppShell';
import { Welcome } from './pages/Welcome';
import { Workspace } from './pages/Workspace';
import { useAppContext } from './store/AppContext';
import { Preview } from './pages/Preview';
import { Method } from './pages/Method';

function AppContent() {
  const { currentView } = useAppContext();

  return (
    <AppShell>
      {currentView === 'welcome' && <Welcome />}
      {currentView === 'workspace' && <Workspace />}
      {currentView === 'preview' && <Preview />}
      {currentView === 'method' && <Method />}
    </AppShell>
  );
}

function App() {
  return <AppContent />;
}

export default App;
