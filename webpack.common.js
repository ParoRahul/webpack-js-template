const path = require('path');

let HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    module: {
        rules: [
            {
                test: /(?!test\.)\.js$/,
                use: ['babel-loader'],
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'test'), path.resolve(__dirname, 'node_modules') ]
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            
        ],
    },
    resolve: {
        extensions: [ '.js']
    },
    plugins: [new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'template.html') })]
};
