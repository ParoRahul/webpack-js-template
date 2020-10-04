const path = require("path");
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common,{
    mode: "development",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "build")
    },
    plugins: [  new MiniCssExtractPlugin({filename: "[name].css"}) ],
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ]
    }
});
