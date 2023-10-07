/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-se": {
          100: '#e1f3f4',
          200: '#d3f3f5',
          DEFAULT: '#56c5c2'
        },
        "blue-se": {
          DEFAULT: '#a3dcfa',
          100: "#a3dcfa",
          200: "#4247a6",
        },
        "purple": {
          DEFAULT: '#8754ED',
          50: '#FCFAFE',
          100: '#edebff',
          200: '#D5C3F9',
          300: '#BB9EF5',
          400: '#A179F1',
          500: '#8754ED',
          600: '#6321E8',
          700: '#4C14BD',
          800: '#380F8A',
          900: '#230957'
        },
      },
      fontSize: {
        '2xs': '10px',
        '3xs': '8px',
        '4xs': '6px',
      },
      gap: {
        0.25: '1px',
      }
    },
    fontFamily: {
      'body': ['TheSans'],
      'mirza': ['"Mirza"', 'cursive'],
    },
  },
  plugins: [],
}
