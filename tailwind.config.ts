import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azimute: {
          blue: '#2C65A8',
          'blue-deep': '#1E4778',
          'blue-soft': '#E8EFF7',
          black: '#1F1713',
          charcoal: '#2A2520',
          gold: '#DFCC5B',
          'gold-deep': '#B8A744',
          bg: '#FAFAF7',
          paper: '#F2EFEA',
          'dark-bg': '#0D131A',
          'dark-paper': '#161D26',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        'premium': '0 20px 40px -10px rgba(31, 23, 19, 0.08), 0 10px 20px -5px rgba(31, 23, 19, 0.04)',
        'premium-hover': '0 30px 60px -15px rgba(44, 101, 168, 0.12), 0 15px 30px -10px rgba(44, 101, 168, 0.08)',
        'glass': '0 8px 32px 0 rgba(31, 23, 19, 0.08)',
      },
      animation: {
        'slow-spin': 'slowSpin 180s linear infinite',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        slowSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
