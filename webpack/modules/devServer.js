module.exports = () => ({
  devServer: {
    compress: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    open: false,
  },
});
