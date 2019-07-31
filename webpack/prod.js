const merge = require('webpack-merge');
const common = require('./common');
const mode = require('./modules/mode');
const minifyJS = require('./modules/minifyJS');

module.exports = merge(common(), mode('production'), minifyJS());
