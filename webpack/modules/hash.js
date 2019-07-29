function applyHash(name, ext, hash, hashType) {
  let outputFilename = name;
  if (hashType === 'filename') outputFilename += `.${hash}`;
  outputFilename += `.${ext}`;
  if (hashType === 'parameter') outputFilename += `?hash=${hash}`;
  return outputFilename;
}

module.exports.applyHash = applyHash;
