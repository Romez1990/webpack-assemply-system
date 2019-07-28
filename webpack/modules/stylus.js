const { resolveExtension } = require('./resolve');

module.exports = ({ loaders, resolve }) => {
  resolveExtension(resolve, '.styl');
  return {
    test: /\.styl$/,
    use: [
      ...loaders,
      {
        loader: 'stylus',
        options: {
          'resolve url': true,
        },
      },
    ],
  };
};
