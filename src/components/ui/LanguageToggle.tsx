import React from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import { cn } from '../../utils/cn';

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className,
}) => {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 p-1 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
        className
      )}
    >
      <button
        onClick={() => setLocale('en')}
        className={cn(
          'px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200',
          locale === 'en'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        )}
      >
        EN
      </button>
      <button
        onClick={() => setLocale('es')}
        className={cn(
          'px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200',
          locale === 'es'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        )}
      >
        ES
      </button>
    </div>
  );
};
