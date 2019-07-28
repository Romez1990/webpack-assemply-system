const cssnanoArgs = {
  preset: [
    'default',
    {
      discardComments: {
        removeAll: true,
      },
    },
  ],
};

module.exports = ({ webpack }) => ({
  plugins: [
    require('autoprefixer'),
    webpack.mode === 'production' ? require('cssnano')(cssnanoArgs) : undefined,
    require('css-mqpacker'),
  ],
});
