const resolveApp = require('./common');
const file_list = require('../../public/file-list');
const module_list = require('../../public/module-list');

const config = {
    devtool: 'cheap-module-source-map',
    entry: file_list,
    output: {
        path: resolveApp('public/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: module_list,
                //exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'
            }
        ]
    },
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    }
};

module.exports = config;