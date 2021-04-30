const path = require('path');
const dist = path.resolve(__dirname, './static/js/');
const webpack = require('webpack');

let banner = new webpack.BannerPlugin({
    banner: `
    pentagame.cobalt.rocks ([name]) - Under AGPL-3.0 @ Cobalt <chaosthe0rie@pm.me>
    chunkhash:[chunkhash], filebase:[base], file:[file]
    `,
});

module.exports = {
    mode: 'development',
    devtool: false, // don't ever use inline-source-map
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: {
        main: './static/ts/main.ts',
    },
    plugins: [banner],
    output: {
        path: dist,
        publicPath: '/js/',
        filename: '[name].js',
    },
};
