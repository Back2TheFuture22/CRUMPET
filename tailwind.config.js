/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crumpet': {
          bg: '#FFFBE5',
          primary: '#E07A24',
          secondary: '#F7B731',
          text: '#2D3748',
        },
      },
      fontFamily: {
        'display': ['Bangers', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}