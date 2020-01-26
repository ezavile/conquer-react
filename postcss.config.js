const path = require('path');
const tailwindcss = require('tailwindcss');

const tailwindConfig = path.resolve(__dirname, './tailwind.config.js');

module.exports = {
  plugins: [tailwindcss(tailwindConfig)],
};
