const path = require('path')
const webpack = require('webpack')

const baseConfig = require('./web.base.config.js')

module.exports = Object.assign(
    {},
    baseConfig,
    {
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    include: path.join(__dirname, '../src'),
                    loader: 'babel-loader?cacheDirectory=true',
                }
            ],
        },
        plugins: [
            ...baseConfig.plugins,
            // optimizations
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                },
            }),
        ]
    }
)
