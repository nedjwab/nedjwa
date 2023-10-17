/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
       'bc':'#DDB0B1',
    },
    extend: {
        fontFamily: {
          'Roboto': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
}

