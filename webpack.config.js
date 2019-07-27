const path = require('path');

const subdirectories = false;
const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  context: src,
  entry: {
    index: './index',
  },
  output: {
    path: dist,
    filename: path.join(subdirectories ? 'js' : '', '[name].js'),
  },
};
