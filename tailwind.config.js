/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        container : "1400px"
      },
      colors : {
        primary : "#ffffff",
        secondary : "#3639A4",
        tertiary : "#43E7DF"
      },
      fontFamily : {
        chivo : ["Chivo"]
      }
    },
  },
  plugins: [],
}