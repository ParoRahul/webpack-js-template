const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PORT = 8081;

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: `http://localhost:${PORT}`
    },
    plugins: [  new MiniCssExtractPlugin({filename: '[name].css'}) ],
    devServer:{
        host: 'localhost',
        port : PORT,
        contentBase: path.resolve(__dirname, 'build'),
        hot: true
    }
});
