/** @type {import('tailwindcss').Config} */
export default {
  // Enable class-based dark mode so we can toggle via a class on <html>
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Brand colour palette
      colors: {
        brand: {
          50:  '#fef9ee',
          100: '#fdf0d0',
          200: '#f9dd9d',
          300: '#f6c45f',
          400: '#f2a928',
          500: '#ee8f0e',  // primary accent — warm amber/gold
          600: '#d36e08',
          700: '#af4f09',
          800: '#8d3e0e',
          900: '#74340f',
          950: '#401806',
        },
        dark: {
          bg:   '#0f1117',
          card: '#1a1d27',
          border: '#2a2d3a',
        },
      },
      // Larger base font sizes to exceed Tailwind defaults
      fontSize: {
        base:  ['1.0625rem', { lineHeight: '1.75' }],  // 17px
        lg:    ['1.1875rem', { lineHeight: '1.75' }],  // 19px
        xl:    ['1.3125rem', { lineHeight: '1.75' }],  // 21px
        '2xl': ['1.5625rem', { lineHeight: '1.4'  }],  // 25px
        '3xl': ['1.875rem',  { lineHeight: '1.3'  }],  // 30px
        '4xl': ['2.375rem',  { lineHeight: '1.2'  }],
        '5xl': ['3rem',      { lineHeight: '1.15' }],
        '6xl': ['3.75rem',   { lineHeight: '1.1'  }],
        '7xl': ['4.5rem',    { lineHeight: '1.05' }],
      },
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
      // Keyframe animations used across the site
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
