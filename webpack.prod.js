const path = require("path");

const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common,{
    mode: "production",
    output: {
        filename: "index.[contentHash].js",
        path: path.resolve(__dirname, "build")
    },
    plugins: [  new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}),
                new CleanWebpackPlugin()
    ],
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                }
        ]
    }        

});
