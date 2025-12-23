import React, { useEffect } from 'react';
import { FiAward, FiBriefcase, FiFolder, FiHome } from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { cn } from '../../utils/cn';
import { Certifications } from '../pages/Certifications';
import { Experience } from '../pages/Experience';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';

interface MainContentProps {
  className?: string;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

type TabType = 'home' | 'projects' | 'experience' | 'certifications';

export const MainContent: React.FC<MainContentProps> = ({
  className,
  activeTab,
  setActiveTab,
}) => {
  const { t } = useLocale();

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const tabs = [
    { id: 'home' as TabType, label: t('nav.home'), icon: FiHome },
    { id: 'projects' as TabType, label: t('projects.title'), icon: FiFolder },
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
        'min-h-screen',
        'transition-colors duration-300',
        className
      )}
    >
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}orbit-favicon.svg`}
                alt="Logo"
                className="w-8 h-8"
              />
              <span className="text-lg font-bold text-gray-900 dark:text-white hidden sm:inline">
                {t('common.portfolio')}
              </span>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2">
              {tabs.map(tab => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      activeTab === tab.id
                        ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                    )}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden md:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-6">{renderContent()}</div>
    </main>
  );
};
