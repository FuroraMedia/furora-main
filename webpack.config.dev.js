const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '/client'),
  target: 'web',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './browserEntry.jsx',
  ],
  output: {
    path: path.join(__dirname, '/client/dist'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader',
          'css-loader',
          'sass-loader',
        ],
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
        use: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      },
    ],
  },
};
