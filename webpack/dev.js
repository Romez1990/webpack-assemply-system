const merge = require('webpack-merge');
const common = require('./common');
const mode = require('./modules/mode');
const devtool = require('./modules/devtool');
const watch = require('./modules/watch');
const devServer = require('./modules/devServer');
const html = require('./modules/html');
const pug = require('./modules/pug');
const css = require('./modules/css');
const stylus = require('./modules/stylus');
const postcss = require('./modules/postcss');

const {
  entry,
  sourceDirectory: src,
  subdirectories,
  cssExtracting: { dev: extract },
  hashing: { dev: hash },
} = require('./var');

module.exports = merge(
  common({ hash }),
  mode('development'),
  devtool('inline-cheap-module-source-map'),
  watch(100),
  devServer(),
  html({ src, entries: entry, addons: [pug], pretty: true }),
  css({
    src,
    addons: [postcss, stylus],
    extract: { enable: extract, subdirectories, hash },
    sourceMap: true,
  }),
);
