module.exports = ({ options }) => ({
  test: /\.(jpg|png|svg|gif)$/,
  use: [
    {
      loader: 'url',
      options: {
        limit: options.limit,
        fallback: 'file-loader',
        name: options.name,
        outputPath: 'img',
      },
    },
  ],
});
