const resolveApp = require('../scripts/config/common');

const module_list = [
    resolveApp('public/src'),
    resolveApp('node_modules/dd-*')
];

module.exports = module_list;