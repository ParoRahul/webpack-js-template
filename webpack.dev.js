const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PORT = 8081;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: ''
    },
    plugins: [  new MiniCssExtractPlugin({filename: '[name].css'}) ],
    devServer:{
        host: 'localhost',
        port : PORT,
        hot: true
    }
});
