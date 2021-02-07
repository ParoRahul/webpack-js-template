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
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg|png|jpeg)$/i,
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
