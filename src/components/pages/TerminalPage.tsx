import React from 'react';
import { FiInfo, FiTerminal } from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { Terminal } from '../ui/Terminal';

export const TerminalPage: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
          <FiTerminal className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          Terminal Portfolio
        </h2>

        {/* Disclaimer */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <FiInfo className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                {t('terminal.disclaimer.title')}
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                {t('terminal.disclaimer.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Component */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <Terminal className="w-full" />
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
          💡 {t('terminal.exploreHint')}:
        </h3>
        <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <div>
            <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded text-xs">
              whoami
            </code>{' '}
            - {t('terminal.commands.whoami')}
          </div>
          <div>
            <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded text-xs">
              ls
            </code>{' '}
            - {t('terminal.commands.ls')}
          </div>
          <div>
            <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded text-xs">
              cat about.md
            </code>{' '}
            - {t('terminal.commands.cat')} about file
          </div>
          <div>
            <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded text-xs">
              docker ps
            </code>{' '}
            - {t('terminal.commands.dockerPs')}
          </div>
          <div>
            <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded text-xs">
              kubectl get pods
            </code>{' '}
            - {t('terminal.commands.kubectlPods')}
          </div>
          <div>
            <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded text-xs">
              help
            </code>{' '}
            - {t('terminal.commands.help')}
          </div>
        </div>
      </div>
    </div>
  );
};
