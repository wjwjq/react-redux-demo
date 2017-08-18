const path = require("path");
const webpack = require("webpack");
const CommonsPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, "src");
const APP_FILE = path.resolve(APP_PATH, "index.js");

module.exports = {

    //页面入口文件配置
    entry: {
        app : APP_FILE,
        commons: [
            "react",
            "react-dom",
            "react-router",
            "redux",
            "react-redux",
            "redux-thunk"
        ]
    },

    //文件输出配置
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "dist")
    },

    //加载器配置
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","postcss-loader"],
                    publicPath: "dist"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","postcss-loader","less-loader"],
                    publicPath: "dist"
                })
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                exclude: /^node_modules$/,
                use: ["url-loader?limit=8192&name=images/[hash:8].[name].[ext]"]
            },
            {
                test:/\.html$/,
                use:["html-loader"]
            }
        ]
    },

    resolve: {
        modules: [
            path.join(__dirname, "dist"),
            "node_modules"
        ],
        extensions: [".js", ".jsx", ".less", ".scss", ".css"] //后缀名自动补全
    },

    //插件项
    plugins: [
        //定义编译环境
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production") //定义编译环境
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        //合并相同模块
        new CommonsPlugin({
            name: "commons",
            filename: "commons.js"
        }),
        //CSS文件单独打包
        new ExtractTextPlugin({
            filename: "style.css",
            disable: false,
            allChunks: true
        }),
        //文件压缩
        new UglifyJsPlugin({
            sourceMap: false,
            comments: false,
            compress: {
                warnings: false
            }
        }),
        //加载器最小化
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            context: __dirname,
            debug: false
        }),
        //生成文件顶部加入注释
        new webpack.BannerPlugin({
            banner: "This file is created by eagleagle, " + new Date(),
            raw: false,
            entryOnly: true
        }),
        //根据模板插入css/js等生成最终HTML
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        })
    ],

    //引入第三方类库
    externals: {
        //"jquery": "jQuery"
    }
};