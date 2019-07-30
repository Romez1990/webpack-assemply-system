const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { applyAddons } = require('./rules');

module.exports = ({ src, entries, addons = [], pretty = false }) => {
  const plugins = [];
  const options = {
    type: 'html',
    pretty,
  };

  const initialRules = [
    {
      test: /\.html$/,
      use: 'html',
    },
  ];

  const rules = applyAddons({ addons, initialRules, options });

  Object.keys(entries).forEach(entry => {
    plugins.push(
      new HtmlPlugin({
        filename: `${entry}.html`,
        chunks: ['vendors', entry],
        template: path.join(src, entry, `template.${options.type}`),
      }),
    );
  });

  return { plugins, module: { rules } };
};
