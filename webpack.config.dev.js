const path = require('path');
const webpack = require('webpack');

const GLOBALS = {
  'process.env.BROWSER': JSON.stringify(true),
};

module.exports = {
  mode: 'development',
  context: path.join(__dirname, '/client'),
  target: 'web',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './clientApp.js',
  ],
  output: {
    path: path.join(__dirname, '/client/dist'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/,
      // },
      {
        test: /\.scss$/,
        use: ['style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-object-assign']
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
