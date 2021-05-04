const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // TODO: DRY use values from src/tokens/Tokens.ts
        'medium-slate-blue': 'hsl(252deg 94% 67%)',
        'light-slate-blue': 'hsl(252deg 100% 73%)',
        'midnight-express': 'hsl(233deg 31% 17%)',
        valhalla: 'hsl(233deg 31% 17%)',
        'link-water': 'hsl(231deg 73% 93%)',
        'cool-gray': 'hsl(231deg 20% 61%)',
        'ship-cove': 'hsl(231deg 37% 63%)',
        cinder: 'hsl(228deg 29% 7%)',
        carnation: 'hsl(0deg 80% 63%)',
        'light-salmon-pink': 'hsl(0deg 100% 80%)',
        'white-lilac': 'hsl(240deg 27% 98%)',
        mirage: 'hsl(233deg 30% 11%)',
      },
      // TODO: DRY use values from src/tokens/Tokens.ts
      fontSize: {
        h1: [
          '2rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-1px',
          },
        ],
        h2: [
          '1.25rem',
          {
            lineHeight: '1.375rem',
            letterSpacing: '-0.63px',
          },
        ],
        h3: [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '-0.8px',
          },
        ],
        h4: [
          '0.75rem',
          {
            lineHeight: '0.938rem',
            letterSpacing: '-0.25px',
          },
        ],
        body: [
          '0.75rem',
          {
            lineHeight: '0.938rem',
            letterSpacing: '-0.25px',
          },
        ],
        'body-small': [
          '0.688rem',
          {
            lineHeight: '1.125',
            letterSpacing: '-0.23px',
          },
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        body: {
          fontFamily: `'Spartan', 'sans-serif'`,
          fontSize: '0.75rem',
          lineHeight: '0.938rem',
          letterSpacing: '-0.25px',
          color: 'hsl(228deg 29% 7%)',
        },
      });
    }),
  ],
};
