/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        }
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'particle-float-1': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0px) translateX(0px) scale(0.5)'
          },
          '50%': { opacity: '1' },
          '100%': {
            opacity: '0',
            transform: 'translateY(-80px) translateX(20px) scale(1)'
          },
        },
        'particle-float-2': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0px) translateX(0px) scale(0.5)'
          },
          '50%': { opacity: '1' },
          '100%': {
            opacity: '0',
            transform: 'translateY(-100px) translateX(-15px) scale(1.2)'
          },
        },
        'particle-float-3': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0px) translateX(0px) scale(0.5)'
          },
          '50%': { opacity: '1' },
          '100%': {
            opacity: '0',
            transform: 'translateY(-90px) translateX(10px) scale(1)'
          },
        },
        'particle-float-4': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0px) translateX(0px) scale(0.5)'
          },
          '50%': { opacity: '1' },
          '100%': {
            opacity: '0',
            transform: 'translateY(-70px) translateX(-20px) scale(1.1)'
          },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'spin-slow': 'spinSlow 4s linear infinite',
        'gradient': 'gradient 8s linear infinite',
        'particle-float-1': 'particle-float-1 2s ease-out forwards',
        'particle-float-2': 'particle-float-2 2.5s ease-out forwards',
        'particle-float-3': 'particle-float-3 2.2s ease-out forwards',
        'particle-float-4': 'particle-float-4 2.8s ease-out forwards',
      }
    }
  },
  plugins: [],
}
