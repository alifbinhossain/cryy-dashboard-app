/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        'theme-green': '#32DED4',
        'theme-green-dark': '#259F98',
        'alert-gray': '#A7A7A7',
        'alert-red': '#EA4E4E',
        'alert-green': '#69C630',
        'alert-orange': '#FFAE35',
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    styled: false,
    themes: false,
    base: false,
    utils: false,
    logs: true,
  },
};
