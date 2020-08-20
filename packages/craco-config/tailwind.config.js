module.exports = {
  theme: {
    extend: {
      color: {},
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['src/**/*.tsx'],
  },
};
