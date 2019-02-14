const fs = require('fs');
const merge = require('babel-merge');
const ext = `${__dirname}/babel.ext.json`;

module.exports = merge({
  only: [
    'src',
    'styleguide',
  ],
  comments: false,
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'babel-plugin-array-includes',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-json-strings',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        'babel-plugin-add-module-exports',
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'babel-plugin-dynamic-import-node',
      ],
    },
  },
}, fs.existsSync(ext) && require(ext)); // eslint-disable-line
