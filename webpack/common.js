const path = require('path');
const merge = require('webpack-merge');
const clean = require('./modules/clean');
const js = require('./modules/js');
const babel = require('./modules/babel');
const ts = require('./modules/ts');
const eslint = require('./modules/eslint');
const json = require('./modules/json');
const html = require('./modules/html');

const {
  entry,
  sourceDirectory: src,
  distributionDirectory: dist,
  subdirectories,
} = require('./var');

module.exports = () => {
  const common = {
    context: src,
    entry,
    output: {
      path: dist,
      filename: path.join(subdirectories ? 'js' : '', '[name].js'),
    },
    resolveLoader: {
      moduleExtensions: ['-loader'],
    },
  };

  return merge(
    common,
    clean(),
    js({ src, addons: [babel, ts, eslint] }),
    json(),
    html({ src, entries: entry }),
  );
};
