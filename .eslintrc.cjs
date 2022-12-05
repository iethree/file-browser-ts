module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'no-only-tests'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['**/node_modules/**', 'dist/', 'public/', 'build/'],
  rules: {
    'no-console': 'warn',
    'import/no-unresolved': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'no-only-tests/no-only-tests': 'error',
  },
  settings: {
    '@typescript-eslint/parser': ['.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        project: ['frontend/tsconfig.json', 'api/tsconfig.json'],
      },
      alias: {
        map: [
          ['@', './src'],
          ['@test', './src/types'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  globals: {
    React: true,
    JSX: true,
  },
};
