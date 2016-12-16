const path = require('path');
const webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'source-map',
  // noInfo: false,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './client/browserEntry.jsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
  },
  preLoaders: [
    {
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    },
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.jsx?$/,
        loader: ['babel'],
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.js?$/,
        loader: ['babel'],
        query: {
          presets: ['es2015', 'react'],
        },
        exclude: ['/node_modules/', '/server/', '/.spec.js/'],
      },
      {
        test: /\.(jpe|jpg|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      },
    ],
  },
};
