import React from 'react';
import { cn } from '../../utils/cn';

interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  subtitle?: string;
  count?: number;
}

interface TabSwitchProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: 'default' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TabSwitch: React.FC<TabSwitchProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = 'default',
  size = 'md',
  className,
}) => {
  const containerVariants = {
    default:
      'bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-2 border border-slate-200 dark:border-slate-700',
    pills: 'bg-gray-100 dark:bg-gray-800 rounded-xl p-1',
    underline: 'border-b border-gray-200 dark:border-gray-700',
  };

  const tabVariants = {
    default: {
      active: 'text-indigo-600 dark:text-indigo-400',
      inactive:
        'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200',
    },
    pills: {
      active:
        'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm',
      inactive:
        'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200',
    },
    underline: {
      active:
        'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400',
      inactive:
        'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200',
    },
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-sm',
    lg: 'px-6 py-4 text-base',
  };

  return (
    <div className={cn(containerVariants[variant], className)}>
      <div
        className={cn(
          'flex relative',
          variant === 'underline' ? 'space-x-8' : ''
        )}
      >
        {/* Background Slider for default variant */}
        {variant === 'default' && (
          <div
            className={cn(
              'absolute top-0 h-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-600 transition-all duration-500 ease-out',
              `left-${tabs.findIndex(tab => tab.id === activeTab) === 0 ? '0' : '1/2'} w-1/2`
            )}
            style={{
              left: `${(tabs.findIndex(tab => tab.id === activeTab) / tabs.length) * 100}%`,
              width: `${100 / tabs.length}%`,
            }}
          />
        )}

        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              'relative z-10 flex-1 rounded-xl text-center transition-all duration-300 group',
              sizes[size],
              activeTab === tab.id
                ? tabVariants[variant].active
                : tabVariants[variant].inactive
            )}
          >
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              {tab.icon && (
                <div
                  className={cn(
                    'p-2 sm:p-3 rounded-lg transition-all duration-300',
                    activeTab === tab.id
                      ? variant === 'default'
                        ? 'bg-indigo-100 dark:bg-indigo-900/30 scale-110'
                        : 'bg-primary-100 dark:bg-primary-900/30 scale-110'
                      : 'bg-slate-100 dark:bg-slate-700 group-hover:bg-slate-200 dark:group-hover:bg-slate-600'
                  )}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6">{tab.icon}</div>
                </div>
              )}
              <div>
                <div className="flex items-center gap-2 justify-center">
                  <h3 className="font-bold text-sm sm:text-lg">{tab.label}</h3>
                  {tab.count !== undefined && (
                    <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full">
                      {tab.count}
                    </span>
                  )}
                </div>
                {tab.subtitle && (
                  <p className="text-xs sm:text-sm opacity-75 hidden sm:block">
                    {tab.subtitle}
                  </p>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
