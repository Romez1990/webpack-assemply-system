function resolveExtension(resolve, extension) {
  if (!Array.isArray(resolve.extensions)) resolve.extensions = [];
  resolve.extensions.push(extension);
}

module.exports.resolveExtension = resolveExtension;
