const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require('./webpack.config.base.js')
module.exports = {
    ...base,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader:加载到js中；style-loader放到head标签中
                use: ['style-loader', 'css-loader'], //css在页面里面
            },
        ],
    },
};

