const path = require('path');

const config = {
  entry: {
    index: './index',
  },
  sourceDirectory: 'src',
  distributionDirectory: 'dist',
  subdirectories: false,
};

config.sourceDirectory = path.join(__dirname, '..', config.sourceDirectory);
config.distributionDirectory = path.join(
  __dirname,
  '..',
  config.distributionDirectory,
);

module.exports = config;
