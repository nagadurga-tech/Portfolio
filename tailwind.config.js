/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        
      'fade-up': 'fade-up 1s ease-out forwards',
    'fade-in': 'fadeIn 1.5s ease-out forwards',
    'gradient-text': 'gradientText 4s ease-in-out infinite',
    'slide-in': 'slideIn 1s ease-out forwards',
      
  },
  keyframes: {
    floatUp: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-15px)' },
    },
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    slideIn: {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    gradientText: {
      '0%, 100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
    },
     float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-15px)' },
      },
      pulseGlow: {
        '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
        '50%': { opacity: '1', transform: 'scale(1.2)' },
      },
      gradientMove: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
  },
   animation: {
      gradientText: 'gradientMove 3s ease infinite',
      float: 'float 4s ease-in-out infinite',
      pulseGlow: 'pulseGlow 2s ease-in-out infinite',
    },
    },
  },
  plugins: [],
};
