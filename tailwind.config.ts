import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF7F0',
          100: '#F6EFE0',
          200: '#F3EAD8',
          300: '#E8DCC4',
        },
        gold: {
          400: '#D4B481',
          500: '#C9A87A',
          600: '#B8915C',
          700: '#9C7B4A',
          800: '#8A6F4A',
        },
        ink: {
          900: '#2C2418',
          800: '#3A2D1A',
          700: '#3D3120',
          600: '#5A3F1A',
          500: '#6B553A',
          400: '#8A7050',
        },
        accent: {
          rust: '#B54A2A',
          sage: '#6B7A5A',
          navy: '#2C3E50',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Noto Serif KR', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'Noto Sans KR', 'sans-serif'],
        korean: ['Noto Serif KR', 'serif'],
      },
      maxWidth: {
        '7xl': '80rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
