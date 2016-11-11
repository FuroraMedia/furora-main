var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// const GLOBALS = {
//   'process.env.NODE_ENV': JSON.stringify('production')
// };

module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/index.js'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		//new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    }),
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
	],

	module: {
		loaders: [
			{test: /(\.css)$/, loader: ExtractTextPlugin.extract('css')},
			{test: /(\.scss)$/, loader: ExtractTextPlugin.extract('style','css!sass')},

			{
				test: /\.js$/,
				loader: ['babel'],
				query: {
					presets: ['es2015', 'react']
				},
				exclude: ['/node_modules/', '/\.spec\.js/']
			},
			{
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
    		loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			}
	   ]
	}
}
