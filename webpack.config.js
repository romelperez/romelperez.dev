const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: './assets/js/app.js'
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      data: 'api/data'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/[^prhone]/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
};
