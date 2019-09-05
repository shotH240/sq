//path是 node.js提供的与路径相关的库
var path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    //入口文件
    entry: './src/index.js',
    //出口文件
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                //css加载器配置
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                //图片加载器配置
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
        ]
    },
    plugins:[
        //清除(注意先后顺序)
        new CleanWebpackPlugin(),
        //自动加载html
        new HtmlWebpackPlugin()
    ]
}