/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'roboto': ['Roboto'],
    },
    extend: {
      colors: {
        blue: {
          100: '#F4FAFF',
          600: '#204B78',
          800: '#072748',
          regulus: '#011830'
        },
      },
    },
  },
  plugins: [],
}
