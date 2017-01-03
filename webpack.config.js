var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        app: "./resources/assets/js/app.js",
        vendor: ["react", "react-dom",'react-router', 'jquery']
    },
    output: {
        path: __dirname + '/public/js/',
        publicPath: "/js/",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ["common", "vendor"],
            minChunks: 2
        })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader!less",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: [/node_modules/, /public/],
                loader: "babel",
                query: {
                    presets: ['es2015', 'react']
                },
                resolve: {
                    extensions: ['', '.js', '.jsx']
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
}