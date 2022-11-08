/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
        CerebriBold: ["CerebriBold", "sans-serif"],
        CerebriMedium: ["CerebriMedium", "sans-serif"]
      }
    },
  },
  plugins: [],
}