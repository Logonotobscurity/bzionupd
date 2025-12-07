const nextPlugin = require('@next/eslint-plugin-next');

module.exports = {
  extends: 'next',
  plugins: ['@next/next'],
  rules: nextPlugin.configs.recommended.rules,
};
