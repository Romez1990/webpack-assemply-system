const path = require('path');
const { applyHash } = require('./hash');
const { applyAddons, patchRules } = require('./rules');

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

module.exports = ({ src, addons = [], extract, sourceMap = false }) => {
  const plugins = [];
  const resolve = {
    extensions: ['.css'],
  };

  const initialLoaders = [
    resolveExtracting(plugins, extract),
    {
      loader: 'css',
      options: {
        sourceMap,
      },
    },
  ];
  const initialRules = [
    {
      test: /\.css$/,
      use: initialLoaders,
    },
  ];

  const rules = applyAddons({
    addons,
    resolve,
    initialRules,
    initialLoaders,
    options: { sourceMap },
  });
  patchRules({ rules, src });

  return { resolve, plugins, module: { rules } };
};
