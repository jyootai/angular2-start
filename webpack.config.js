var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'app', 'index.js'),
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'vendor.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'angular2']
                }
            },
        ]
    }
}