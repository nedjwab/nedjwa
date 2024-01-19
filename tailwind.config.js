/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'back':'#000000',
      'para':'#F2E6D8',
      'white':"#ffffff",
      'span':'#B9848C',
      'blu':'#806491',
    },
    extend: {
        fontFamily: {
          'Roboto': ['Roboto Slab', 'serif'],
          'Dancing' :['Dancing Script', 'cursive'],
          'Bodoni': ['Bodoni Moda', 'serif']
      },
      height: {
        '128': '730px',
        '119':'800px'
      }
    },
  },
  plugins: [
  ],
}

