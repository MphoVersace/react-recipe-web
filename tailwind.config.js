/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fdb095",
        secondary: "#210440",
        tertiary: "#e5958e",
        fourthColor: "#ffba00",
      },
    },
  },
  plugins: [],
}

