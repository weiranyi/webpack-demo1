const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 文件名中的hash是便于添加缓存的
        filename: '[name].[contenthash].js',
    },
};