import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { MainContent } from './components/layout/MainContent';
import { Sidebar } from './components/layout/Sidebar';
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider } from './contexts/ThemeContext';

type TabType = 'home' | 'projects' | 'experience' | 'certifications';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <ThemeProvider>
      <LocaleProvider>
        <div className="min-h-screen transition-colors duration-300">
          <Sidebar />
          <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'var(--toast-bg)',
                color: 'var(--toast-color)',
                border: '1px solid var(--toast-border)',
                borderRadius: '0.75rem',
                padding: '16px',
                fontSize: '14px',
                fontWeight: '500',
              },
              success: {
                style: {
                  background: 'var(--toast-success-bg)',
                  color: 'var(--toast-success-color)',
                  border: '1px solid var(--toast-success-border)',
                },
              },
              error: {
                style: {
                  background: 'var(--toast-error-bg)',
                  color: 'var(--toast-error-color)',
                  border: '1px solid var(--toast-error-border)',
                },
              },
            }}
          />
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
