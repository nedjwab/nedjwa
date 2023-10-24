/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'back':'#F2E6D8',
      'para':'#594A3C',
      'span':'#A67153',
      'blu':'#615F6D',
    },
    extend: {
        fontFamily: {
          'Roboto': ['Roboto Slab', 'serif'],
          'Dancing' :['Dancing Script', 'cursive'],
          'Bodoni': ['Bodoni Moda', 'serif']
      },
      height: {
        '128': '730px',
      }
    },
  },
  plugins: [
  ],
}

