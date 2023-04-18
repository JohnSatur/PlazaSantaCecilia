/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
  ],
  theme: {
    fontFamily: {
      'primary': ['poppins', 'sans-serif'],
      'title': ['DM Serif Display', 'serif']
    },
    extend: {
      spacing: {
        'semiScreen': '80vh',
      },
      colors: {
        'primary': '#592333',
        'lightPrimary': '#F4E7EA',
        'darkPrimary': '#1C020D',
        'secondary': '#424B5A',
        'tertiary': '#C2D1D9',
        'strongText': '#505D68',
        'lightText': '#A1AEB7',
        'lightTextDark': '#E0E0E0',
      },
      flexGrow: {
        2: '2',
      },
      backgroundImage: {
        'contact-bg': "url('src/assets/img/plaza-temp-2.jpg')"
      }
    },
  },
  plugins: [],
}
