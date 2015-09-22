/**
 * Created by zain on 8/25/15.
 */
module.exports = {
  entry: [
    './src/client/entry'
  ],
  output: {
    path: __dirname + '/public/scripts/',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['babel-loader?experimental'], exclude: /node_modules/}
    ]
  }
};
