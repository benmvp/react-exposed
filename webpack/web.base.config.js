const path = require('path')
const webpack = require('webpack')

const APP_PATH = path.join(__dirname, '../src')
const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        path.join(APP_PATH, '/index.js'),
    ],
    output: {
        path: path.join(__dirname, '../public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // Useful to reduce the size of client-side libraries, e.g. react
                NODE_ENV: JSON.stringify(NODE_ENV),
            },
        })
    ],
}
