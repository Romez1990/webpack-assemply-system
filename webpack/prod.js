const merge = require('webpack-merge');
const common = require('./common');
const mode = require('./modules/mode');
const minifyJS = require('./modules/minifyJS');
const html = require('./modules/html');

const { entry, sourceDirectory: src } = require('./var');

module.exports = merge(
  common(),
  mode('production'),
  minifyJS(),
  html({ src, entries: entry }),
);
