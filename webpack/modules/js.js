const { applyAddons, patchRules } = require('./rules');

module.exports = ({ src, addons = [] }) => {
  const resolve = {
    extensions: ['.js'],
  };
  const initialLoaders = [];
  const initialRules = [
    {
      test: /\.js$/,
      use: initialLoaders,
    },
  ];

  const rules = applyAddons({
    addons,
    resolve,
    initialRules,
    initialLoaders,
  });
  patchRules({ rules, src });

  return { resolve, module: { rules } };
};
