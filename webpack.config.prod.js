const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Purify = require('purifycss-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
};

module.exports = {
  context: path.join(__dirname, '/client'),
  target: 'web',
  entry: ['./browserEntry.jsx'],
  output: {
    path: path.join(__dirname, '/client/dist'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new Purify({
      basePath: path.join(__dirname, './client/src'),
      paths: [
        './server/views/index.ejs',
        'components/**/*.jsx',
      ],
      resolveExtensions: ['.html', '.js', '.jsx'],
      purifyOptions: {
        minify: true,
        info: true,
        rejected: true,
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'furora-media',
      filename: 'sw.js',
      minify: true,
      runtimeCaching: [{
        urlPattern: '/',
        handler: 'cacheFirst',
      }],
      dynamicUrlToDependencies: {
        '/': ['./server/views/index.ejs'],
      },
      ignoreUrlParametersMatching: [/./],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /(\.css)$/,
        loader: ExtractTextPlugin.extract('css-loader'),
      },
      {
        test: /(\.scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
            },
          },
        ],
      },
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
            },
          },
        ],
        exclude: ['/node_modules/', '/server/', '/.spec.js/'],
      },
      {
        test: /\.(jpe|jpg|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: 'url-loader?limit=25000&name=[name]-[hash].[ext]',
      },
    ],
  },
};
