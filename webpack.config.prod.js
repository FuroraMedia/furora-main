const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Purify = require('purifycss-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
};

module.exports = {
  entry: ['./client/browserEntry.jsx'],
  output: {
    path: path.join(__dirname, '/client/dist'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new Purify({
      basePath: path.join(__dirname, './client/src'),
      paths: [
        'components/**/*.jsx',
      ],
      resolveExtensions: ['.html', '.js', '.jsx'],
      purifyOptions: {
        minify: true,
        info: true,
        rejected: true
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ output: { comments: false } }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'my-project-name',
      filename: 'my-service-worker.js',
      maximumFileSizeToCacheInBytes: 4194304,
      runtimeCaching: [{
        handler: 'cacheFirst',
        urlPattern: /[.]mp3$/,
      }],
    }),
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
        loader: 'url-loader?limit=20000&name=[name]-[hash].[ext]',
      },
    ],
  },
};
