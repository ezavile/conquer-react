const tailwindcss = require('tailwindcss');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');

module.exports = {
  style: {
    postcss: {
      plugins: [tailwindcss('./tailwind.config.js'), nested, autoprefixer],
    },
  },
};
