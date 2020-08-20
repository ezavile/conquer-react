const plugin = require('tailwindcss/plugin');
const base = require('@conquer-react/craco-config/tailwind.config');

// TODO: improve destructing using immerjs

const newDimensions = {
  '72': '18rem',
  '80': '20rem',
};

module.exports = {
  ...base,
  theme: {
    ...base.theme,
    extend: {
      ...base.theme.extend,
      colors: {
        ...base.theme.extend.color,
        'dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
        'grayish-blue': 'hsl(212, 23%, 69%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
      },
      height: newDimensions,
      width: newDimensions,
      letterSpacing: {
        widest: '0.4em',
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        body: {
          fontFamily: 'Manrope',
          fontSize: '13px',
          lineHeight: 1.6,
          fontWeight: 500,
        },
        h2: {
          fontSize: '1.2rem',
          fontWeight: 700,
        },
      });
    }),
  ],
};
