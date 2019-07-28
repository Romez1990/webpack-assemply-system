const path = require('path');

const {
  subdirectories,
  sourceDirectory: src,
  distributionDirectory: dist,
  entry,
} = require('./webpack/var');

module.exports = {
  context: src,
  entry,
  output: {
    path: dist,
    filename: path.join(subdirectories ? 'js' : '', '[name].js'),
  },
};
