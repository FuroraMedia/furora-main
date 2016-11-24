const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
  //debug: true,
  // devtool: 'source-map',
  entry: ['./client/browserEntry.jsx'],
  output: {
    path: path.join(__dirname, '/client/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
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
        test: /(\.css)$/,
        loader: ExtractTextPlugin.extract('css'),
      }, {
        test: /(\.scss)$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
      },
      {
        test: /\.jsx?$/,
        loader: ['babel'],
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.js$/,
        loader: ['babel'],
        query: {
          presets: ['es2015', 'react'],
        },
        exclude: ['/node_modules/', '/\.spec\.js/'],
      }, {
        test: /\.(html|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      },
    ],
  },
};
