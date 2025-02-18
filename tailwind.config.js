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
        'display':['Poppins','sans-serif'],
        'body':['inter','sans-serif']
      },
      
    },
  },
  plugins: [],
}

