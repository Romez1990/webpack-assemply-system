module.exports = ({ src }) => {
  const resolve = {
    extensions: ['.css'],
  };
  const rules = [
    {
      test: /\.css$/,
      include: src,
      use: ['style', 'css'],
    },
  ];
  return { resolve, module: { rules } };
};
