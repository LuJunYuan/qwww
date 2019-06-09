// 引入 path 核心模块
const path = require('path')
// 配置当前项目的相关信息
// 配置：项目的入口文件
module.exports = {
    // 配置入口文件
    entry: './src/main.js',
    // 配置出口文件
    output: {
        // 出口文件名
        filename: 'app.js',
        // 出口文件的路径
        path: path.resolve(__dirname, 'dist')
    },
    // 设置当前项目的环境
    mode: 'development',
    // 添加 source map
    devtool: 'source-map',
    // 配置打包文件的信息
    module: {
        rules: [ // 打包的其它文件的规则
            {
                // 打包以 .css 为后缀的文件
                test: /\.css$/,
                use: [
                    'style-loader', // 将 css 代码使用 style 标签包裹，并且添加到页面的 head 中 
                    'css-loader'    // 将 css 代码打包到 App.js 中
                ]
            }
        ]
    }
}