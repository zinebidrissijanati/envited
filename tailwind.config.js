/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first-color': '#240D57',
        'blue-magenta': '#8456EC',
        'atomic-pink-color': '#E87BF8',
        'gray-color': '#4F4F4F'
      },
      fontFamily: {
        'sans': ['Helvetica']
      },
    },
  },
  plugins: [],
}
