/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0A',
        gold: '#C9A96E',
        textPrimary: '#FFFFFF',
        textSecondary: '#A0A0A0',
        cardBg: '#141414'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(60px) scale(0.98)', opacity: '0' },
          '100%': { transform: 'translateX(0) scale(1)', opacity: '1' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-60px) scale(0.98)', opacity: '0' },
          '100%': { transform: 'translateX(0) scale(1)', opacity: '1' }
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.98)' }
        }
      },
      animation: {
        'slide-in-right': 'slideInRight 1000ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slideInLeft 1000ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 1000ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-out': 'fadeOut 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }
    },
  },
  plugins: [],
}
