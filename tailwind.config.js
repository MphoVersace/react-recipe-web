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
        secondary: "#ba181b",
        tertiary: "#D3473E",
        fourthColor: "#ffa500",
        bgColor: "#FFECCE",
      },
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
      },
      textStrokeColor: theme => theme('colors'),
    },
    textShadow: {
      'sm': '1px 1px 1px rgba(0, 0, 0, 0.2)',
      'md': '2px 2px 2px rgba(0, 0, 0, 0.25)',
      'lg': '3px 3px 3px rgba(0, 0, 0, 0.3)',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          WebkitTextStrokeWidth: 'var(--text-stroke-width, 2px)',
          WebkitTextStrokeColor: 'var(--text-stroke-color, black)',
          MozTextStrokeWidth: 'var(--text-stroke-width, 2px)',
          MozTextStrokeColor: 'var(--text-stroke-color, black)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
