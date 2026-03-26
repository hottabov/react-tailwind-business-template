import React, { createContext, useContext, useEffect, useState } from 'react';

/**
 * ThemeContext — глобальний контекст для мульти-теми (світла/темна) 
 * та вибору кольорової схеми (default, ocean, forest, rust).
 */
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // mode: 'light', 'dark', or 'system'
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'system'
  );
  
  // colorTheme: 'default', 'ocean', 'forest', 'rust'
  const [colorTheme, setColorTheme] = useState(
    () => localStorage.getItem('colorTheme') || 'default'
  );

  useEffect(() => {
    const root = document.documentElement;
    
    const applyMode = (m) => {
      let isDark = m === 'dark';
      if (m === 'system') {
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyMode(theme);
    localStorage.setItem('theme', theme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => { if (theme === 'system') applyMode('system'); };
    
    // Modern browsers use addEventListener
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', colorTheme);
    localStorage.setItem('colorTheme', colorTheme);
  }, [colorTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
