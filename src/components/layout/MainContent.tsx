import React from 'react';
import { FiAward, FiBriefcase, FiFolder, FiHome, FiTerminal } from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { cn } from '../../utils/cn';
import { Certifications } from '../pages/Certifications';
import { Experience } from '../pages/Experience';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';
import { TerminalPage } from '../pages/TerminalPage';

interface MainContentProps {
  className?: string;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

type TabType = 'home' | 'projects' | 'terminal' | 'experience' | 'certifications';

export const MainContent: React.FC<MainContentProps> = ({ className, activeTab, setActiveTab }) => {
  const { t } = useLocale();

  const tabs = [
    { id: 'home' as TabType, label: t('nav.home'), icon: FiHome },
    { id: 'projects' as TabType, label: t('projects.title'), icon: FiFolder },
    { id: 'terminal' as TabType, label: 'Terminal', icon: FiTerminal },
    {
      id: 'experience' as TabType,
      label: t('experience.title'),
      icon: FiBriefcase,
    },
    {
      id: 'certifications' as TabType,
      label: t('certifications.title'),
      icon: FiAward,
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'terminal':
        return <TerminalPage />;
      case 'experience':
        return <Experience />;
      case 'certifications':
        return <Certifications />;
      default:
        return <Home />;
    }
  };

  return (
    <main
      className={cn(
        activeTab !== 'home' ? 'lg:ml-80' : '',
        'min-h-screen bg-gray-50 dark:bg-gray-800',
        'transition-colors duration-300',
        className
      )}
    >
      <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 backdrop-blur-lg bg-white/95 dark:bg-gray-900/95">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 lg:p-6 pt-16 lg:pt-6">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
            {t('common.portfolio')}
          </h1>

          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto w-full sm:w-auto">
            {tabs.map(tab => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap relative',
                    activeTab === tab.id
                      ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-6">{renderContent()}</div>
    </main>
  );
};
