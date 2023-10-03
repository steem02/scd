module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  parserOptions: {
    sourceType: 'module',
    tsConfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  plugins: ['react', 'i18next', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/no-empty-interface': [1],
    '@typescript-eslint/no-unused-vars': [1],
    '@typescript-eslint/comma-dangle': [0],
    '@typescript-eslint/semi': [0],
    'i18next/no-literal-string': 1,
    '@typescript-eslint/space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    '@typescript-eslint/naming-convention': [0],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'sem"semi" 'none' or 'semi' or 'comma'
          requireLast: true,
        },
        singleline: {
          delimiter: "semi", // 'semi' or 'comma'
          requireLast: false,
        },
      },
    ],
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["**/*.test.tsx?"],
      env: {
        jest: true,
      },
      plugins: ["jest"],
      rules: {
        "i18next/no-literal-string": [0],
      },
    },
  ],
  globals: {
    __IS_DEV__: true,
  },
};
