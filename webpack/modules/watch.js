module.exports = (aggregateTimeout = 300) => ({
  watch: true,
  watchOptions: {
    aggregateTimeout,
  },
});
