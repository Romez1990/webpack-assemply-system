const merge = require('webpack-merge');
const common = require('./common');
const mode = require('./modules/mode');
const minifyJS = require('./modules/minifyJS');
const html = require('./modules/html');
const pug = require('./modules/pug');
const css = require('./modules/css');

const {
  entry,
  sourceDirectory: src,
  subdirectories,
  cssExtracting: { prod: extract },
} = require('./var');

module.exports = merge(
  common(),
  mode('production'),
  minifyJS(),
  html({ src, entries: entry, addons: [pug] }),
  css({ src, extract: { enable: extract, subdirectories } }),
);
