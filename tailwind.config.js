/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        LightGrey: '#D4D4D2',
        EerieBlack: '#1C1C1C',
        DarkLiver: '#505050',
        VividGamboge: '#FF9500'
      },
    },
  },
  plugins: [],
}
