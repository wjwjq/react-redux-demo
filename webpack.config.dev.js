const path = require("path");
const webpack = require("webpack");

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, "src");
const APP_FILE = path.resolve(APP_PATH, "index.js");
const BUILD_PATH = path.join(ROOT_PATH, "dist");

module.exports = {

    //页面入口文件配置
    entry: {
        app: [
            APP_FILE
        ]
    },
    
    //入口文件输出配置
    output: {
        publicPath: "dist/", //编译好的文件，在服务器的路径,这是静态资源引用路径
        path: BUILD_PATH, //发布文件地址
        filename: "[name].js", //编译后的文件名字
        chunkFilename: "[name].js"
    },

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: ["babel-loader", "eslint-loader"],
                exclude: /node_modules/,
                include: [APP_PATH]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
                include: [APP_PATH]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
                include: [APP_PATH]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                exclude: /^node_modules$/,
                use: ["url-loader?limit=8192&name=images/[hash:8].[name].[ext]"],
                include: [APP_PATH]
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
                include: [APP_PATH]
            }
        ]
    },

    devtool: "source-map",
    
    target: "web",

    
    devServer: {
        proxy: { // proxy URLs to backend development server
            "/api": "http://localhost:3000"
        },
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        port: 8080,
        open: true,
        watchOptions: {
            poll: true
        }
    },

    //插件项
    plugins: [
        //定义编译环境
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    //引入第三方类库
    externals: {
        //"jquery": "jQuery"
    },


    resolve: {
        extensions: [".js", ".jsx", ".less", ".css"] //后缀名自动补全
    }
};