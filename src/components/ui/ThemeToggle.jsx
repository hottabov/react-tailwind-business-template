import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Paintbrush, Sun, Moon, Monitor } from 'lucide-react';

const colorThemes = [
  { id: 'default', name: 'Premium Gold', color: '#ee8f0e' },
  { id: 'forest', name: 'Forest Green', color: '#389f66' },
  { id: 'ocean', name: 'Ocean Blue', color: '#0c8deb' },
  { id: 'rust', name: 'Soft Terracotta', color: '#d95a28' }
];

export default function ThemeToggle() {
  const { theme, setTheme, colorTheme, setColorTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // Close pane if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:bg-brand-50 dark:hover:bg-brand-900/30 transition-all duration-300 hover:scale-110 group relative"
        aria-label="Theme Settings"
      >
        <Paintbrush size={18} className="text-gray-600 dark:text-gray-300 group-hover:text-brand-500 transition-colors" />
        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
          Paint the website
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-3 p-5 bg-white dark:bg-dark-card rounded-2xl shadow-xl dark:shadow-2xl border border-gray-100 dark:border-dark-border w-[280px] origin-top-right animate-scale-in z-50">
          
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Color Accent</h4>
          <div className="flex items-center gap-3 mb-6">
            {colorThemes.map((t) => (
              <button
                key={t.id}
                onClick={() => setColorTheme(t.id)}
                className={`w-9 h-9 text-xs flex items-center justify-center rounded-full transition-all hover:scale-110 relative group ${
                  colorTheme === t.id 
                    ? 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-dark-card ring-gray-900 dark:ring-white scale-110' 
                    : ''
                }`}
                style={{ backgroundColor: t.color }}
                aria-label={`Select ${t.name} color`}
              >
                {/* Tooltip for Colors */}
                <span className="absolute -bottom-8 whitespace-nowrap bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                  {t.name}
                </span>
              </button>
            ))}
          </div>

          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Appearance</h4>
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-dark-bg p-1.5 rounded-xl">
            {[
              { id: 'light', icon: Sun, label: 'Light' },
              { id: 'dark', icon: Moon, label: 'Dark' },
              { id: 'system', icon: Monitor, label: 'Auto' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setTheme(m.id)}
                className={`flex-1 flex flex-col items-center justify-center py-2 gap-1 rounded-lg text-xs font-semibold transition-all ${
                  theme === m.id 
                    ? 'bg-white dark:bg-dark-card shadow-sm text-brand-500' 
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                }`}
                aria-label={`Select ${m.label} mode`}
              >
                <m.icon size={16} />
                {m.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
