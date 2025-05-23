/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'screen-370': '370px',
        'screen-414': '414px'
      }
    },
  },
  plugins: [],
}

