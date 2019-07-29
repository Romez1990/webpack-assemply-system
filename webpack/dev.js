const merge = require('webpack-merge');
const common = require('./common');
const mode = require('./modules/mode');
const devtool = require('./modules/devtool');

module.exports = merge(
  common(),
  mode('development'),
  devtool('inline-cheap-module-source-map'),
);
