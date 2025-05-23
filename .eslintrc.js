/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'vuetify',
    '@vue/eslint-config-typescript',
    './.eslintrc-auto-import.json',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/attributes-order': 'off',
    'no-useless-constructor': 'off',
    'no-use-before-define': 'off',
    'space-before-function-paren': 'off',
  },
}
