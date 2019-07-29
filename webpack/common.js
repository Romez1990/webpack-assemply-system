const path = require('path');
const merge = require('webpack-merge');
const { applyHash } = require('./modules/hash');
const clean = require('./modules/clean');
const js = require('./modules/js');
const babel = require('./modules/babel');
const ts = require('./modules/ts');
const eslint = require('./modules/eslint');
const json = require('./modules/json');

const {
  entry,
  sourceDirectory: src,
  distributionDirectory: dist,
  subdirectories,
} = require('./var');

module.exports = ({ hash } = {}) => {
  const common = {
    context: src,
    entry,
    output: {
      path: dist,
      filename: path.join(
        subdirectories ? 'js' : '',
        applyHash('[name]', 'js', '[chunkhash]', hash),
      ),
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
  );
};
