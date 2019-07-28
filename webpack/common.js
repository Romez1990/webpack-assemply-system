const path = require('path');
const merge = require('webpack-merge');
const js = require('./modules/js');
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

  return merge(common, js({ src }), html({ src, entries: entry }));
};
