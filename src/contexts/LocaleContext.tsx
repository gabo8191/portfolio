import React, { createContext, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { LocaleContextType } from '../types';

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

interface LocaleProviderProps {
  children: React.ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const { i18n, t } = useTranslation();

  const changeLocale = (locale: string) => {
    i18n.changeLanguage(locale);
    localStorage.setItem('language-preference', locale);

    // Update document title based on language
    const titleKey =
      locale === 'es'
        ? 'Gabriel Castillo - Portafolio'
        : 'Gabriel Castillo - Portfolio';
    document.title = titleKey;
  };

  useEffect(() => {
    // Check for saved language preference, default to Spanish
    const savedLanguage = localStorage.getItem('language-preference');
    if (savedLanguage && ['en', 'es'].includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage);
    } else {
      // Set Spanish as default
      i18n.changeLanguage('es');
      localStorage.setItem('language-preference', 'es');
    }

    // Set initial title
    const currentLang = i18n.language || 'es';
    const titleKey =
      currentLang === 'es'
        ? 'Gabriel Castillo - Portafolio'
        : 'Gabriel Castillo - Portfolio';
    document.title = titleKey;
  }, [i18n]);

  const value: LocaleContextType = {
    locale: i18n.language || 'es',
    setLocale: changeLocale,
    t,
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};
