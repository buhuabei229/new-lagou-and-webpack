const webpack = require('webpack');
const htmlwebpackplugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
// 引入mock.js
const Mock = require('./mock.js');
const config = {
    entry:{
        babelPolyfill:'babel-polyfill',//添加了这个东西，才能完美的将ES6转码,否则Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，如：Set Map
        app: __dirname + '/src/main.js',//可以有多个入口文件
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js',
        publicPath: '/' // 打包上线
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        contentBase: __dirname + '/dist',
        inline: true,
        hot: true,
        open: true,
        // setup(app){
        //      app.get('/list/data', (req, res) => {
        //            let list = require('./src/client/mock/mock.json');
        //            res.json(list);
        //      })
        // },
        // proxy: {//代理配置
        //     '/api': {
        //         target: 'http://localhost:3000',
        //         pathRewrite: {'^/api' : ''},//如果不想/api传递，我们需要重写路径
        //     }
        // },
        before: function(app) {
            if (process.env.NODE_ENV === 'mock') {
              Mock(app);
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader', 'sass-loader','postcss-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf|woff|eot)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1024
                }
            },
        ]
    },
    // resolveLoader: {
    //     modleExtensions:['-loader'] //加后缀
    // },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlwebpackplugin({
            template:  __dirname + '/public/index.html',
            title: '拉钩网',//生成的html文档的标题
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
            hash:true,//是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
            // minify: false,//传递 html-minifier 选项给 minify 输出
            favicon: "",//添加特定的 favicon 路径到输出的 HTML 文件中。
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("css/[name].min.css"),
        // 设置环境变量信息
        new webpack.DefinePlugin({
            'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
        // new copyWebpackPlugin([
        //     {
        //     from:__dirname+'/public',//打包的静态资源目录地址
        //     to:'./public' //打包到dist下面的static
        //     }
        // ])
    ]
}
module.exports = config;
