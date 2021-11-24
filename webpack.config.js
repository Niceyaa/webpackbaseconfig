// 引入路径包
const path = require('path')
// 引入HTML插件
const HTMLWebpackPlugin = require("html-webpack-plugin")
// 引入clean插件
const {CleanWebpackPlugin} = require("clean-webpack-plugin")


// webpack 中的所有配置信息都应该写在这里面
module.exports={
    //入口文件
    entry: './src/index.ts',

    //指定打包文件所在的目录
    output: {
        // 打包文件输出目录
        path: path.resolve(__dirname,'dist'),
        // 打包后的文件名称
        filename: "bundle.js"
    },

    mode: "development",

    // 指定webpack打包要使用的模块
    module:{
        // 指定要加载的规则
        rules: [
            {
                // test指定规则生效的文件（使用规则的文件）
                test: /\.ts$/,
                // 使用的loader（加载器）
                use: 'ts-loader',
                // 排除哪些文件
                exclude: /node-modules/
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin()
    ],

    // 用来设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }


}
