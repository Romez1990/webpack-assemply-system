const merge = require('webpack-merge');
const common = require('./common');
const mode = require('./modules/mode');

module.exports = merge(common(), mode('production'));
