const plugin = require('tailwindcss/plugin');
const base = require('@conquer-react/craco-config/tailwind.config');

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
