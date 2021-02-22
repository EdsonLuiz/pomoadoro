const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      rajdhani: ['Rajdhani', 'sans-serif'],
    },
    colors: {
      ...defaultTheme.colors,
      lime: colors.lime,
      warmGray: colors.warmGray,
      blueGray: colors.blueGray,
      rose: colors.rose,
      lightBlue: colors.lightBlue,

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
