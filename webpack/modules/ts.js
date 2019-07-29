const { resolveExtension } = require('./resolve');

module.exports = ({ loaders, resolve }) => {
  resolveExtension(resolve, '.ts');
  return {
    test: /\.ts$/,
    use: [...loaders, 'ts'],
  };
};
