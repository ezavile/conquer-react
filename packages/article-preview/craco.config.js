const tailwindcss = require('tailwindcss');

module.exports = {
  style: {
    postcss: {
      plugins: [
        tailwindcss('./tailwind.config.js'),
        require("postcss-nested"),
        require('autoprefixer'),
      ],
    },
  },
};
