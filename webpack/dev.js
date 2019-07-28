const merge = require('webpack-merge');
const common = require('./common');
const mode = require('./modules/mode');
const devtool = require('./modules/devtool');
const watch = require('./modules/watch');
const devServer = require('./modules/devServer');

module.exports = merge(
  common(),
  mode('development'),
  devtool('inline-cheap-module-source-map'),
  watch(100),
  devServer(),
);
