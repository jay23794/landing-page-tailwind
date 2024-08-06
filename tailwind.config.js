/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./website/index.html"],
  theme: {
    extend: {
      colors:{
        'primary':'#3238f2'
      },
      fontFamily: {
        'display':['Poppins','sans-serif'],
        'body':['inter','sans-serif']
      },
      
    },
  },
  plugins: [],
}

