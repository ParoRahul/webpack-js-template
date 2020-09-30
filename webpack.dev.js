const path = require("path");
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

module.exports = merge(common,{
    mode: "development",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "build")
    },
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
              }
        ]
    }
});
