const webpack = require('webpack');

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    core: './src/js/core/core.js',
    index: './src/js/index/index.js'
  },
  output: {
    path: './public/js/',
    filename: '[name].js'
  },
  resolve: {
    fallback: process.cwd()
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
  devtool: dev ? 'inline-source-map' : undefined,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
};
