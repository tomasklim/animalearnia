module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'max-len': ['error', { code: 120 }],
    semi: 'off',
    'no-plusplus': 'off',
    'no-new': 'off',
    'object-curly-newline': 'off',
    'arrow-parens': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    'function-paren-newline': 'off',
  },
}
