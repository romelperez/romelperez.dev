const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    core: './src/js/core/core.js',
    index: './src/js/index/index.js'
  },
  output: {
    path: './assets/js/',
    filename: '[name].js'
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
