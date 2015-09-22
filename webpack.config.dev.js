/**
 * Created by zain on 8/17/15.
 */
var webpack = require('webpack');
var config = require('./config/config');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:' + config.webpack.port,
    'webpack/hot/only-dev-server',
    './src/client/entry'
  ],
  output: {
    path: __dirname + '/public/scripts/',
    filename: 'app.js',
    publicPath: 'http://localhost:' + config.webpack.port + '/scripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/}
    ]
  }
};
