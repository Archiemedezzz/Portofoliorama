module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./src/js/**/*.js",
    "./src/assets/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D1D1D',
        secondary: '#6C6B6B',
        accent: '#3B82F6', // Contoh warna aksen
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        hand: ['Patrick Hand', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Untuk styling form element
    require('@tailwindcss/typography'), // Untuk konten prose
  ],
  darkMode: 'class', // Menggunakan class-based dark mode
  important: true, // Memastikan specificity tinggi
  corePlugins: {
    preflight: true, // Reset CSS default Tailwind
  }
}