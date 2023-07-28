module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  // Airbnb's ESLint config requires this
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/display-name': 'off',
    // We will use TypeScript's types for component props instead
    'react/prop-types': 'off',
    // We don't want unused vars
    '@typescript-eslint/no-unused-vars': ['error'],
    // disable airbnb rules
    'react/jsx-filename-extension': [0],
    // disable airbnb rules
    'import/extensions': [
      'error',
      'never',
      {
        json: 'always',
        svg: 'always',
      },
    ],
    'import/no-unresolved': 'off',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    // react 17 dont need to import
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '_' }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': ['error', { props: false }],
  },
};
