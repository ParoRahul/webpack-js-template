const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

const PORT = 8081;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: { sourceMap: true} }, 
                    {loader: 'sass-loader', options: { sourceMap: true}}
                ],
            },
            {
                test: /\.(eot|ttf|svg|png|jpeg|jpg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images'
                    }
                },
            }
        ]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: ''
    },
    devServer:{
        host: 'localhost',
        port : PORT,
        hot: true
    }
});
