/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",  // If you're using Create React App, this points to the index.html
    "./src/**/*.{js,jsx,ts,tsx}",  // Ensures Tailwind CSS applies to all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
