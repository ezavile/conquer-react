module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-typescript',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  settings:  {
    react:  {
      version:  'detect',
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-console': 'warn',
    "import/no-extraneous-dependencies": ["error", {"packageDir": '.'}]
  }
};
