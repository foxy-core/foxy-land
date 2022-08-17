/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne'],
        'dm-sans': ['DMSans'],
      },
      colors: {
        'x-bg': '#222',
        'x-white': '#F0F0F0',
        'x-orange-300': '#FE984E',
        'x-orange-400': '#FF740F',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
