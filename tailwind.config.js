/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    screens:{
      'sm':'490px',
      'md':'780px',
      'lg':'1020px',
      'xl':'1210px',
    },  
    extend: {},
  },
  plugins: [],
}

