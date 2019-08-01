module.exports = () => ({
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /node_modules/,
          enforce: true,
        },
      },
    },
  },
});
