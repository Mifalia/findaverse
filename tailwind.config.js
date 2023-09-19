/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFBD39',
        'primary-container': '#FFFAE6',
        secondary: '#FF5739',
        'primary-text-color': '#303030',
        'secondary-text-color': '#8F92A7',
        'primary-background-color': '#fbfbfb',
        border: '#cccccc',
      },
      fontFamily: {
        serif: 'CabinetGrotesk',
        sans: 'Outfit',
        mono: 'AzeretMono',
      },
    },
  },
  plugins: [],
};
