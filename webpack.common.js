const path = require('path');

let HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    module: {
        rules: [
            /* {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }, */
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg|png|jpeg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'images'
                    }
                },
            }
        ],
    },
    resolve: {
        extensions: [ '.js']
    },
    plugins: [new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'template.html') })]
};
