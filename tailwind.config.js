/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'body': ['Lato', 'sans-serif'],
      'menu': ['Roboto'],
    },
    extend: {
      colors: {
        blue: {
          100: '#F4FAFF',
          regulus: '#011830'
        },
      },
    },
  },
  plugins: [],
}
