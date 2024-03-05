module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
  ],
  plugins: [ 'react-refresh', '@typescript-eslint' ],
  ignorePatterns: [ 'dist', '.eslintrc.cjs' ],
  parser: '@typescript-eslint/parser',
  settings: {react: {version: 'detect'}},
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    indent: [ 'error', 2, { SwitchCase: 1 } ],
    '@typescript-eslint/indent': [ 'error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    quotes: [ 'error', 'single', { allowTemplateLiterals: true } ],
    semi: [ 'error', 'never' ],
    'eol-last': [ 'error', 'always' ],
    eqeqeq: [ 'error', 'always' ],
    'spaced-comment': [ 'error', 'always', { markers: [ '/' ] } ],
    'block-spacing': [ 'error', 'always' ],
    'no-whitespace-before-property': [ 'error' ],
    'no-trailing-spaces': [ 'error' ],
    'space-in-parens': [ 'error', 'always', { 'exceptions': [ 'empty' ] } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'no-unused-vars': [ 'off' ],
    'no-multiple-empty-lines': [ 'error', { max: 1 } ],
    '@typescript-eslint/no-unused-vars': [ 'error' ],
    'brace-style': 'off',
    'no-multi-spaces': 'error',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true
          }
        }
      }
    ],
    '@typescript-eslint/brace-style': [ 'error' ],
    '@typescript-eslint/explicit-function-return-type': [ 'error' ],
    'max-len': [ 'error', { code: 120 } ],
    'space-infix-ops': [ 'error' ],
    'key-spacing': [ 'error' ],
    'comma-spacing': [ 'error' ],
    'arrow-spacing': [ 'error' ],
    'keyword-spacing': [ 'error' ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'function', next: 'function' },
      {
        blankLine: 'always',
        prev: 'multiline-block-like',
        next: 'multiline-block-like'
      },
      {
        blankLine: 'always',
        prev: 'multiline-expression',
        next: 'multiline-block-like'
      },
      {
        blankLine: 'always',
        prev: 'multiline-block-like',
        next: 'multiline-expression'
      },
      {
        blankLine: 'always',
        prev: 'multiline-expression',
        next: 'multiline-expression'
      },
      { blankLine: 'always', prev: 'import', next: 'expression' }
    ],
    'react/react-in-jsx-scope': 'off',
    'switch-colon-spacing': [ 'error' ],
  }
}
