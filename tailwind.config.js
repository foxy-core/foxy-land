/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'display', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
        smuy: ['"Seymour One"', 'sans-serif'],
      },
      colors: {
        'x-bg': '#222',
        'x-white': '#F0F0F0',
        'x-orange': {
          300: '#FE984E',
          400: '#FF740F',
        },
        'x-gray-300': '#D9D9D9',
        'x-gray-400': '#BCBCBC',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
