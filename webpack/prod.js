const merge = require('webpack-merge');
const common = require('./common');
const mode = require('./modules/mode');
const minifyJS = require('./modules/minifyJS');
const html = require('./modules/html');
const pug = require('./modules/pug');
const css = require('./modules/css');
const stylus = require('./modules/stylus');

const {
  entry,
  sourceDirectory: src,
  subdirectories,
  cssExtracting: { prod: extract },
  hashing: { prod: hash },
} = require('./var');

module.exports = merge(
  common({ hash }),
  mode('production'),
  minifyJS(),
  html({ src, entries: entry, addons: [pug] }),
  css({
    src,
    addons: [stylus],
    extract: { enable: extract, subdirectories, hash },
  }),
);
