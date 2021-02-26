const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'nlw': '112px minmax(0, 1fr)'
      },
      backgroundImage: theme => ({
        'levelup': "url('/icons/levelup.svg')",
       })
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      rajdhani: ['Rajdhani', 'sans-serif'],
    },
    colors: {
      ...defaultTheme.colors,
      lime: colors.lime,
      warmGray: colors.warmGray,
      trueGray: colors.trueGray,
      blueGray: colors.blueGray,
      rose: colors.rose,
      lightBlue: colors.lightBlue,

    },
  },
  variants: {
    extend: {
      borderColor: ['first', 'last'],
      borderWidth: ['first', 'last'],
    },
  },
  plugins: [],
}
