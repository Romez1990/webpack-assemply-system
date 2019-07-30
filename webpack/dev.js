const merge = require('webpack-merge');
const common = require('./common');
const mode = require('./modules/mode');
const devtool = require('./modules/devtool');
const watch = require('./modules/watch');
const devServer = require('./modules/devServer');
const html = require('./modules/html');
const pug = require('./modules/pug');

const { entry, sourceDirectory: src } = require('./var');

module.exports = merge(
  common(),
  mode('development'),
  devtool('inline-cheap-module-source-map'),
  watch(100),
  devServer(),
  html({ src, entries: entry, addons: [pug], pretty: true }),
);
