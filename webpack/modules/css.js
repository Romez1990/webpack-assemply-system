const path = require('path');

function resolveExtracting(plugins, extract) {
  if (extract.enable) {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    plugins.push(
      new MiniCssExtractPlugin({
        filename: path.join(
          extract.subdirectories ? 'css' : '',
          '[name].css',
        ),
      }),
    );
    return MiniCssExtractPlugin.loader;
  }

  return 'style';
}

module.exports = ({ src, extract }) => {
  const plugins = [];
  const resolve = {
    extensions: ['.css'],
  };

  const rules = [
    {
      test: /\.css$/,
      include: src,
      use: [resolveExtracting(plugins, extract), 'css'],
    },
  ];

  return { resolve, plugins, module: { rules } };
};
