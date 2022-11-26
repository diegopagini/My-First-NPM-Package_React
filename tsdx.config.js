const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');
// yarn add -D rollup-plugin-postcss
// yarn add -D @rollup/plugin-image
// yarn add postcss --save-dev

module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({ modules: true }),
      images({ incude: ['**/*.png', '**/*.jpg'] }),
      ...config.plugins,
    ];
    return config;
  },
};
