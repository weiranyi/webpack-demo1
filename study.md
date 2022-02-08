# 1、项目初始化
npm init -y
# 2、安装webpack和webpack-cli
yarn add webpack@4 webpack-cli@3 --dev
# 3、用webpack转译JS；若目录有空格就不能用了；./node_modules/.bin/webpack
npx webpack --version 
# 4、配置 webpack.config.js
```
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
};
```
# 5、缓存的作用
- 加快访问速度
- 首页不缓存，缓存CSS、JS

# 6、运行
```
yarn build  #执行了这一步rm -rf dist;npx webpack
```

# 7.webpack 生成 HTML
```
    plugins: [new HtmlWebpackPlugin({
        title: "亦蔚然",
        template: "src/assets/index.html"
    })],
```
# 加载CSS
```
 yarn add css-loader --dev
 yarn add style-loader --dev
```

#
http-server . -c-1