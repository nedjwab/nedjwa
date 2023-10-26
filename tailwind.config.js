/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'back':'#000000',
      'para':'#F2E6D8',
      'span':'#A67153',
      'blu':'#926E61',
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

