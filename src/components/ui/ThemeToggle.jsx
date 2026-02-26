/**
 * ThemeToggle — animated sun/moon toggle button.
 * Reads and updates theme from ThemeContext.
 */
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle colour theme"
      className="
        relative w-10 h-10 rounded-full flex items-center justify-center
        bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border
        hover:bg-brand-50 dark:hover:bg-brand-950
        transition-all duration-300 hover:scale-110
      "
    >
      <span className={`absolute transition-all duration-300 ${theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
        <Sun size={18} className="text-brand-500" />
      </span>
      <span className={`absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
        <Moon size={18} className="text-brand-400" />
      </span>
    </button>
  );
}
