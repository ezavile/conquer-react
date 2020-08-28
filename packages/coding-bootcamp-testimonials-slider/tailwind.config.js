const plugin = require('tailwindcss/plugin');
const base = require('@conquer-react/craco-config/tailwind.config');

const newDimensions = {
  '72': '20rem',
  '80': '34rem',
  '84': '41rem',
  '88': '43.5rem',
};

module.exports = {
  ...base,
  theme: {
    ...base.theme,
    extend: {
      ...base.theme.extend,
      colors: {
        ...base.theme.extend.color,
        'dark-blue': 'hsl(240, 38%, 20%)',
        'grayish-blue': 'hsl(240, 18%, 77%)',
      },
      height: newDimensions,
      width: newDimensions,
      maxWidth: {
        '7xl': '78rem',
      },
      fontSize: {
        '4xl': '32px',
      }
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        body: {
          fontFamily: 'Inter',
          fontSize: '32px',
        },
      });
    }),
  ],
};
