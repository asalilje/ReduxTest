var webpack = require('webpack');
var path = require('path');

var applicationName = "ReduxTest";

var GLOBALS = {
  config: {
    apiUrl: JSON.stringify('./mock-api.json')
  },
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
};

var config = {
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: applicationName + '.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(css|less)$/, loader: "style!css?modules&importLoaders=1&localIdentName=" + applicationName + "_[local]!less" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
    ]
  },
};

module.exports = config;
