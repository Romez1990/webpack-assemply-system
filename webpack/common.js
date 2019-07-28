const path = require('path');
const merge = require('webpack-merge');

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

  return merge(common);
};
