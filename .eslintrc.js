module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['react/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['html', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
