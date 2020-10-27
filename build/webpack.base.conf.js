const { resolve } = require('dns');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PATHS = {
    src: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../public'),
    assets: 'assets/'
}

module.exports = {
    externals: {
        paths: PATHS,
    },

    entry: {
        app: PATHS.src,
    },

    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        // publicPath: '/',
    },

    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            'postcssOptions': {
                                'config': `${PATHS.src}/js/postcss.config.js`,
                            },
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true,
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            'postcssOptions': {
                                'config': `${PATHS.src}/js/postcss.config.js`,
                            },
                        }
                    },
                ],
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
        }),
        new CopyWebpackPlugin({
            patterns: [{
                    from: `${PATHS.src}/images`,
                    to: `${PATHS.assets}images`,
                },
                {
                    from: `${PATHS.src}/static`,
                },
            ]
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/templates/index.html`,
            filename: 'index.html'
        })
    ]
}