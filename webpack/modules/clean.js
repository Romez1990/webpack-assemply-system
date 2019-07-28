const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');

module.exports = () => ({
  plugins: [new CleanPlugin()],
});
