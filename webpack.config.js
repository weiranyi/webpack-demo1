const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 文件名中的hash是便于添加缓存的
        filename: '[name].[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: "亦蔚然",
        template: "src/assets/index.html"
    })],
    module: {
        rules:[
            {
                test: /\.css$/,
                // css-loader:加载到js中；style-loader放到head标签中
                use: ['style-loader','css-loader'],
            },
        ],
    },
};

