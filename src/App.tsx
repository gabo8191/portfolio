import { useState } from 'react';
import { MainContent } from './components/layout/MainContent';
import { Sidebar } from './components/layout/Sidebar';
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider } from './contexts/ThemeContext';

type TabType =
  | 'home'
  | 'projects'
  | 'terminal'
  | 'experience'
  | 'certifications';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <ThemeProvider>
      <LocaleProvider>
        <div className="min-h-screen transition-colors duration-300">
          <Sidebar isVisible={activeTab !== 'home'} />
          <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
