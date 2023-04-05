/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik'],
        dmSans: ['DM+Sans'],
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}