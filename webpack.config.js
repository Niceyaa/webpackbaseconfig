// 引入路径包
const path = require('path')
// 引入HTML插件
const HTMLWebpackPlugin = require("html-webpack-plugin")
// 引入clean插件
const {CleanWebpackPlugin} = require("clean-webpack-plugin")


// webpack 中的所有配置信息都应该写在这里面
module.exports = {
    //入口文件
    entry: './src/index.ts',

    //指定打包文件所在的目录
    output: {
        // 打包文件输出目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名称
        filename: "bundle.js",

        environment:{
            arrowFunction: false
        }
    },

    mode: "development",

    // 指定webpack打包要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定规则生效的文件（使用规则的文件）
                test: /\.ts$/,
                // 使用的loader（加载器）
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 配置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 指定要兼容的目标浏览器
                                        targets: {
                                            // 指定浏览器版本
                                            'chrome': '88',
                                            "ie": '8'
                                        },

                                        // 指定corejs的版本
                                        "corejs":'3',
                                        // 使用corejs的方式   usage 按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 排除哪些文件
                exclude: /node-modules/
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }


}
