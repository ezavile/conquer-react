module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // TODO: DRY use values from src/tokens/colors.ts
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
