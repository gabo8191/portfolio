import React from 'react';
import { FiGlobe } from 'react-icons/fi';
import { useLocale } from '../../contexts/LocaleContext';
import { cn } from '../../utils/cn';

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className,
}) => {
  const { locale, setLocale } = useLocale();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    setLocale(newLocale);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        'relative inline-flex items-center justify-center w-10 h-10 rounded-lg',
        'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700',
        'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100',
        'transition-all duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        'dark:focus:ring-offset-gray-900',
        className
      )}
      title={locale === 'en' ? 'Cambiar a Español' : 'Switch to English'}
    >
      <div className="relative flex items-center gap-1">
        <FiGlobe className="w-4 h-4" />
        <span className="text-xs font-medium uppercase">
          {locale === 'en' ? 'ES' : 'EN'}
        </span>
      </div>
    </button>
  );
};
