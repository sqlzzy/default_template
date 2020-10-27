const { resolve } = require('path');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-source-map',

    devServer: {
        contentBase: path.resolve(__dirname, '../dist/'),
        watchContentBase: true,
        overlay: {
            warnings: false,
            errors: true,
        },
        open: true,
        port: 8081,
        host: '0.0.0.0',
        compress: true
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        }),
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});