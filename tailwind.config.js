/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DCF2F1',
        text: '#0F1035',
        accent: '#365486',
        secondary: '#7FC7D9'
      },
    },
  },
  plugins: [],
}