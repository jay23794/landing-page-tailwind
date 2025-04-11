/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./website/index3.html","./website/index3.html"],
  theme: {
    extend: {
      colors:{
      
       "primary": {  
          "50": '#eff6ff',
          "100": '#dbeafe',
          "200": '#bfdbfe',
          "300": '#93c5fd',
          "400": '#60a5fa',
          "500": '#3b82f6', 
          "600": '#2563eb',
          "700": '#1d4ed8',
          "800": '#1e40af',
          "900": '#1e3a8a',
        },
        "secondary":{
          50: '#ffe6e0',
          100: '#ffc2b3',
          200: '#ff9980',
          300: '#ff704d',
          400: '#ff471a',
          500: '#ff5a3c', // Your original color
          600: '#e62f0a',
          700: '#b32207',
          800: '#801605',
          900: '#4d0b02',
        }

      },
      fontFamily: {
        'display':['Poppins','sans-serif'],
        'body':['Poppins','sans-serif']
      },
      
    },
  },
  plugins: [],
}

