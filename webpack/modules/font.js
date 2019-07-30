module.exports = ({ options }) => ({
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    {
      loader: 'url',
      options: {
        limit: options.limit,
        fallback: 'file-loader',
        name: options.name,
        outputPath: 'font',
      },
    },
  ],
});
