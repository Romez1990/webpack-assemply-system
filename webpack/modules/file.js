const { applyHash } = require('./hash');
const { applyAddons } = require('./rules');

const KB = 2 ** 10;

module.exports = ({ addons = [], hash }) => {
  const name = applyHash('[name]', '[ext]', '[hash:20]', hash);
  const rules = applyAddons({ addons, options: { limit: 8 * KB, name } });
  return { module: { rules } };
};
