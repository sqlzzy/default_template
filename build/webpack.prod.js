const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('./paths');

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: false,

    output: {
        path: path.build,
        publicPath: '/',
        filename: 'assets/js/[name].[contenthash].bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        sourceMap: false,
                    },
                },
                'postcss-loader',
                'less-loader',
            ],
        }, ],
    },
    optimization: {
        minimize: true,
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
        runtimeChunk: {
            name: 'runtime',
        },
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
});