module.exports = ({ options }) => {
  options.type = 'pug';
  return {
    test: /\.pug$/,
    use: [
      {
        loader: 'pug',
        options: {
          pretty: options.pretty,
        },
      },
    ],
  };
};
