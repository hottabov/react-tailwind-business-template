/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(var(--color-white) / <alpha-value>)',
        gray: {
          50:  'hsl(var(--color-gray-50) / <alpha-value>)',
          100: 'hsl(var(--color-gray-100) / <alpha-value>)',
          200: 'hsl(var(--color-gray-200) / <alpha-value>)',
          300: 'hsl(var(--color-gray-300) / <alpha-value>)',
          400: 'hsl(var(--color-gray-400) / <alpha-value>)',
          500: 'hsl(var(--color-gray-500) / <alpha-value>)',
          600: 'hsl(var(--color-gray-600) / <alpha-value>)',
          700: 'hsl(var(--color-gray-700) / <alpha-value>)',
          800: 'hsl(var(--color-gray-800) / <alpha-value>)',
          900: 'hsl(var(--color-gray-900) / <alpha-value>)',
          950: 'hsl(var(--color-gray-950) / <alpha-value>)',
        },
        brand: {
          50:  'hsl(var(--color-brand-50) / <alpha-value>)',
          100: 'hsl(var(--color-brand-100) / <alpha-value>)',
          200: 'hsl(var(--color-brand-200) / <alpha-value>)',
          300: 'hsl(var(--color-brand-300) / <alpha-value>)',
          400: 'hsl(var(--color-brand-400) / <alpha-value>)',
          500: 'hsl(var(--color-brand-500) / <alpha-value>)',
          600: 'hsl(var(--color-brand-600) / <alpha-value>)',
          700: 'hsl(var(--color-brand-700) / <alpha-value>)',
          800: 'hsl(var(--color-brand-800) / <alpha-value>)',
          900: 'hsl(var(--color-brand-900) / <alpha-value>)',
          950: 'hsl(var(--color-brand-950) / <alpha-value>)',
        },
        dark: {
          bg:     'hsl(var(--color-dark-bg) / <alpha-value>)',
          card:   'hsl(var(--color-dark-card) / <alpha-value>)',
          border: 'hsl(var(--color-dark-border) / <alpha-value>)',
        },
      },
      fontSize: {
        base:  ['1.0625rem', { lineHeight: '1.75' }],
        lg:    ['1.1875rem', { lineHeight: '1.75' }],
        xl:    ['1.3125rem', { lineHeight: '1.75' }],
        '2xl': ['1.5625rem', { lineHeight: '1.4'  }],
        '3xl': ['1.875rem',  { lineHeight: '1.3'  }],
        '4xl': ['2.375rem',  { lineHeight: '1.2'  }],
        '5xl': ['3rem',      { lineHeight: '1.15' }],
        '6xl': ['3.75rem',   { lineHeight: '1.1'  }],
        '7xl': ['4.5rem',    { lineHeight: '1.05' }],
      },
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"Courgette"', 'cursive'],
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'hamburger-top': {
          '0%':   { transform: 'translateY(0) rotate(0)' },
          '100%': { transform: 'translateY(8px) rotate(45deg)' },
        },
        'hamburger-bottom': {
          '0%':   { transform: 'translateY(0) rotate(0)' },
          '100%': { transform: 'translateY(-8px) rotate(-45deg)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up':           'fade-up 0.6s ease forwards',
        'fade-in':           'fade-in 0.5s ease forwards',
        'slide-in-left':     'slide-in-left 0.5s ease forwards',
        'scale-in':          'scale-in 0.4s ease forwards',
        'hamburger-top':     'hamburger-top 0.3s ease forwards',
        'hamburger-bottom':  'hamburger-bottom 0.3s ease forwards',
      },
    },
  },
  plugins: [],
};
