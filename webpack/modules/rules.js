function applyAddons({
  addons,
  resolve,
  initialRules = [],
  initialLoaders = [],
  options,
}) {
  addons.forEach(addon => {
    const rule = addon({ loaders: initialLoaders, resolve, options });
    if (rule) initialRules.push(rule);
  });
  return initialRules;
}

function patchRules({ rules, src }) {
  rules.forEach(rule => {
    rule.include = src;
  });
}

module.exports.applyAddons = applyAddons;
module.exports.patchRules = patchRules;
