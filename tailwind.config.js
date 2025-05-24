module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D1D1D',
        secondary: '#6C6B6B',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        hand: ['Patrick Hand', 'cursive']
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}