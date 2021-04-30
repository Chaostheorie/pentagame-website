const path = require('path');
const dist = path.resolve(__dirname, './dist/');
const webpack = require('webpack');

/*
SASS/ PurgeCSS is not handled here, because there have been some problems with setting it up consistently
If you know webpack and wanna give those two a try feel free to open a pull request with the required changes
for reference see: /scripts/compile.sh
*/

let banner = new webpack.BannerPlugin({
  banner:
    'fullhash:[fullhash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]'
});

module.exports = {
  mode: 'production', // change to 'development' when you need to debug in browser
  entry: {
    main: './js/main.js',
  },
  plugins: [banner],
  output: {
    path: dist,
    publicPath: '/theme/js/',
    filename: '[name].js'
  }
};
