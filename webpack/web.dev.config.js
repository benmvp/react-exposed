const path = require('path')
const webpack = require('webpack')

const baseConfig = require('./web.base.config.js')

module.exports = Object.assign(
    {},
    baseConfig,
    {
        entry: [
            'webpack-dev-server/client?http://localhost:8090',
            ...baseConfig.entry
        ],
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    include: path.join(__dirname, '../src'),
                    loaders: [
                        'react-hot-loader',
                        'babel-loader'
                    ]
                }
            ],
        },
        devServer: {
            port: 8090,
            contentBase: path.join(__dirname, '../public'),
            stats: 'errors-only',
            historyApiFallback: true
        },
        plugins: [
            ...baseConfig.plugins,
            new webpack.NoEmitOnErrorsPlugin(),
        ]
    }
)
