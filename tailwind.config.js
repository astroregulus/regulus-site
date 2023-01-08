/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,html,css}'
  ],
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
          700: '#2A4365',
          800: '#072748',
          regulus: '#011830'
        },
      },
    },
  },
  plugins: [],
}
