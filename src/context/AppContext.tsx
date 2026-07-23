import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';
import type { Language, TranslationKey } from '../i18n/translations';

interface AppContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('valeria-portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Initialize language from localStorage or default to 'es'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('valeria-portfolio-lang');
    if (saved === 'es' || saved === 'en') return saved;
    // Default to Spanish as requested
    return 'es';
  });

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('valeria-portfolio-theme', theme);
  }, [theme]);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('valeria-portfolio-lang', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Type-safe translate function
  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations['es'][key] || key;
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, setLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
