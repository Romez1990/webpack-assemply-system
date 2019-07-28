module.exports = ({ loaders, options: { sourceMap } }) => {
  loaders.push({
    loader: 'postcss',
    options: {
      sourceMap,
    },
  });
};
