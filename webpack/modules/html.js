const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { applyAddons } = require('./rules');

module.exports = ({ src, entries, addons = [] }) => {
  const plugins = [];
  const options = {
    type: 'html',
  };

  const rules = applyAddons({ addons, options });

  Object.keys(entries).forEach(entry => {
    plugins.push(
      new HtmlPlugin({
        filename: `${entry}.html`,
        chunks: [entry],
        template: path.join(src, entry, `template.${options.type}`),
      }),
    );
  });

  return { plugins, module: { rules } };
};
