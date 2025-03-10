/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:'#ff5252',
        black:'oklch(0.444 0.011 73.639)'
      },
      backgroundColor:{
        primary :'#ff5252'
      }
    },
  },
  plugins: [ require('daisyui'),],
}

