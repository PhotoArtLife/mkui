//打包时用的配置文件
var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var JSXPath = './src';
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    //页面入口文件配置
    entry: {//需要打包的JS，支持数组
        index : JSXPath + '/index.jsx',
        common :['react','react-dom','react-router']
    },
    //入口文件输出配置
    output: {
        path: path.join(__dirname, 'build'),//'build',
        filename: './js/[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css'] //require 的时候，可以不用写文件类型
    },
    module: {
        //加载器配置
        //凡是.js结尾的文件都是用babel-loader做处理，而.jsx结尾的文件会先经过jsx-loader处理，然后经过babel-loader处理
        loaders: [
            {
                test:/\.jsx?$/,
                exclude:/(node_modules)/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style","css!autoprefixer!sass")
            },
            //{test: /\.less$/, loader: ExtractTextPlugin.extract("style","css!autoprefixer!less")},
            {
                test:/\.css$/,
                loader: ExtractTextPlugin.extract("style","css!autoprefixer")
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|webp|svg)(\?.*)?$/,
                loader: 'file',
                query: {
                    name: 'static/imgs/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                loader: 'url',
                query: {
                  limit: 10000,
                  name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/i,
                loader: 'file',
                query: {
                    name: 'static/fonts/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    //插件项
    plugins: [//将外部的包导出成一个公用的文件比如 jquery，react, react-dom 等
        //extractLESS,extractCSS,extractSASS,
        new webpack.optimize.CommonsChunkPlugin('common','./js/common.js'),
        new HtmlwebpackPlugin({
            title: 'AUI',
            template:'./src/index.html', //html模板路径
            filename: 'index.html',
            inject:true, //允许插件修改哪些内容，包括head与body
            hash:false //为静态资源生成hash值
        }),//添加我们的插件 会自动生成一个html文件
        new webpack.BannerPlugin('mkui'),
        new ExtractTextPlugin("./css/styles.css"), //[hash:8].
        new ExtractTextPlugin("../lib/style.css"), //[hash:8].
        new webpack.DefinePlugin({ //压缩 React
          "process.env": {
            NODE_ENV: JSON.stringify("production") //development,production
          }
        })
    ]
};
