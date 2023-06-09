/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    screens: {
      'sm': "476px",
      'md': "768px",
      'lg': "992px",
      'xl': "1200px",
      '2xl':"1400px",
    }
  },
  plugins: [
    require('flowbite/plugin')
],
}

