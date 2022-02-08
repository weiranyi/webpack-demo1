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

# 5、运行
```
rm -rf dist;npx webpack
```