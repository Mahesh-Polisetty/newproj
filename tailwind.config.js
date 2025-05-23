/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 1s ease-in-out',
        slideRight: 'slideRight 1s ease-in-out',
        blob: 'blob 7s infinite',
        typewriter: 'typewriter 3s steps(20) 1s 1 normal both, blink 1s steps(1) infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};