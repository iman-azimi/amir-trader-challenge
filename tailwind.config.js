/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { transform: 'translateY(-18px)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-in',
      },
    },
  },

  plugins: [],
}
