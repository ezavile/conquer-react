const atImport = require('postcss-import');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');

module.exports = {
  style: {
    postcss: {
      plugins: [atImport, nested, autoprefixer],
    },
  },
};
