module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'vue/multi-word-component-names': 'off'
  },
  globals: {
    Zepto: true,
    $: true,
    moment: true,
    wx: true
  }
}
