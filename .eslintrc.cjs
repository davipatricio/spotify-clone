module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'neon/common',
    'neon/browser',
    'neon/node',
    'neon/typescript',
    'neon/react',
    'neon/edge',
    'neon/prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['**/dist/*'],
  rules: {
    '@typescript-eslint/unbound-method': 0,
    '@typescript-eslint/consistent-type-definitions': [2, 'interface'],
    'react-refresh/only-export-components': 1,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    quotes: [2, 'single'],
    semi: [2, 'always'],
  },
};
