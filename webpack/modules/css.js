const path = require('path');
const { applyHash } = require('./hash');

function resolveExtracting(plugins, extract) {
  if (extract.enable) {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    plugins.push(
      new MiniCssExtractPlugin({
        filename: path.join(
          extract.subdirectories ? 'css' : '',
          applyHash('[name]', 'css', '[contenthash]', extract.hash),
        ),
      }),
    );
    return MiniCssExtractPlugin.loader;
  }

  return 'style';
}

module.exports = ({ src, extract, sourceMap = false }) => {
  const plugins = [];
  const resolve = {
    extensions: ['.css'],
  };

  const rules = [
    {
      test: /\.css$/,
      include: src,
      use: [
        resolveExtracting(plugins, extract),
        {
          loader: 'css',
          options: {
            sourceMap,
          },
        },
      ],
    },
  ];

  return { resolve, plugins, module: { rules } };
};
