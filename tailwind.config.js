module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        vivid: '#25c16a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
