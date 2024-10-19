/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 'greenish-white':'#f8fff8' },
      fontFamily: {'headerLinkFont':['Karla', 'sans-serif']},
    },
    screen: {
      
    }
  },
  plugins: [],
}
