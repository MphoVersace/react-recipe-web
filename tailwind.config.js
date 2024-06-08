/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'devonshire': ["Devonshire", "cursive"],
        'lato': ['Lato', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
      colors: {
        primary: "#fdb095",
        secondary: "#210440",
        tertiary: "#e5958e",
        fourthColor: "#ffba00",
        bgColor: "#FFECCE",
      },
    },
  },
  plugins: [],
}

