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
