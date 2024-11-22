/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        volkhov: ['Volkhov', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        DigitalNumbers: ['DigitalNumbers', 'sans-serif'],
        Jost: ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

