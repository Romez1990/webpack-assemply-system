const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = ({ src, entries }) => {
  const plugins = [];
  Object.keys(entries).forEach(entry => {
    plugins.push(
      new HtmlPlugin({
        filename: `${entry}.html`,
        chunks: [entry],
        template: path.join(src, entry, 'template.html'),
      }),
    );
  });
  return { plugins };
};
