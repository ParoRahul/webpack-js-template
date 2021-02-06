const path = require('path');

const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'index.[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: ''
    },
    plugins: [  new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
        new CleanWebpackPlugin()
    ]
});
