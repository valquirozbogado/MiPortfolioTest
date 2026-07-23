import React from 'react';
import { useApp } from '../../../context/AppContext';
import { Sun, Moon } from 'lucide-react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { theme, toggleTheme, language, setLanguage, t } = useApp();

  const handleLangToggle = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          Valeria<span className={styles.logoSpan}>.Q</span>
        </div>
        
        <div className={styles.controls}>
          {/* Language Toggle Button */}
          <button 
            onClick={handleLangToggle} 
            className={styles.btn}
            aria-label={t('aria_toggle_lang')}
          >
            <span className={styles.langText}>
              {t('lang_label')}
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className={styles.btn}
            aria-label={t('aria_toggle_theme')}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};
