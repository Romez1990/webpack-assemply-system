const path = require('path');

const config = {
  entry: {
    index: './index/index.ts',
  },
  sourceDirectory: 'src',
  distributionDirectory: 'dist',
  subdirectories: false,
  cssExtracting: {
    dev: false,
    prod: true,
  },
  hashing: {
    dev: false,
    prod: 'filename',
  },
};

config.sourceDirectory = path.join(__dirname, '..', config.sourceDirectory);
config.distributionDirectory = path.join(
  __dirname,
  '..',
  config.distributionDirectory,
);

module.exports = config;
