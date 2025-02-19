/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./website/index.html"],
  theme: {
    extend: {
      colors:{
        'primary':'#F99C3B',
        'secondary':'#695C5C',
        'tertiary':'#213555'
      },
      fontFamily: {
        'oleo': ["Oleo Script", "cursive"],
        'display':['Roboto','sans-serif'],
        'body':['Roboto','sans-serif']
      },
      
    },
  },
  plugins: [],
}

