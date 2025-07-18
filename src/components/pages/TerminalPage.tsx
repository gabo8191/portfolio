import React from 'react';
import { FiTerminal } from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { SectionCard } from '../ui/SectionCard';
import { Terminal } from '../ui/Terminal';

export const TerminalPage: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <FiTerminal className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            Portfolio Terminal
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('terminal.disclaimer.description')}
          </p>
        </div>

        {/* Disclaimer */}
        <SectionCard variant="gradient" className="text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-blue-700 dark:text-blue-300">
              <FiTerminal className="w-6 h-6" />
              <h2 className="text-xl font-semibold">
                {t('terminal.disclaimer.title')}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {t('terminal.disclaimer.description')}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  {t('terminal.disclaimer.interactive')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  {t('terminal.disclaimer.simulation')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  {t('terminal.disclaimer.portfolio')} Tool
                </span>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Terminal */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
            Interactive Terminal
          </h2>
          <div className="max-w-4xl mx-auto">
            <Terminal />
          </div>
        </div>

        {/* Help section */}
        <SectionCard>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t('terminal.gettingStarted')}
          </h3>
          <div className="space-y-3 text-gray-600 dark:text-gray-300">
            <p>{t('terminal.helpText.typeHelp')}</p>
            <p>{t('terminal.helpText.useWhoami')}</p>
            <p>{t('terminal.helpText.exploreProjects')}</p>
            <p>{t('terminal.helpText.clearTerminal')}</p>
          </div>
        </SectionCard>
      </div>
    </div>
  );
};
