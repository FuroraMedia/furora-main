const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Purify = require("purifycss-webpack");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

const GLOBALS = {
  "process.env.NODE_ENV": JSON.stringify("production"),
  "process.env.BROWSER": JSON.stringify(true)
};

module.exports = {
  mode: "production",
  context: path.join(__dirname, "/client"),
  target: "web",
  entry: ["./clientApp.js"],
  output: {
    path: path.join(__dirname, "/client/dist"),
    publicPath: "/static/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new MiniCssExtractPlugin({
      filename: "styles.css"
      // chunkFilename: "[name].[hash].css"
    }),
    new Purify({
      paths: glob.sync(path.join(__dirname, "/client/src/components/**/*.js")),
      moduleExtensions: [".html", ".js"],
      purifyOptions: {
        minify: true,
        info: true,
        rejected: true
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   output: {
    //     comments: false,
    //   },
    // }),
    new SWPrecacheWebpackPlugin({
      cacheId: "furora-media",
      filename: "sw.js",
      minify: true,
      runtimeCaching: [
        {
          urlPattern: "/",
          handler: "cacheFirst"
        }
      ],
      dynamicUrlToDependencies: {
        "/": ["./server/views/index.ejs"]
      },
      ignoreUrlParametersMatching: [/./]
    })
  ],
  resolve: {
    extensions: [".js"],
    modules: ["node_modules"]
  },

  module: {
    rules: [
      {
        test: /(\.css)$/,
        use: [MiniCssExtractPlugin.loader]
      },
      {
        test: /(\.scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.js?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-transform-object-assign"
              ]
            }
          }
        ],
        exclude: ["/node_modules/", "/server/", "/.spec.js/"]
      },
      {
        test: /\.(jpe|jpg|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: "url-loader?limit=25000&name=[name]-[hash].[ext]"
      }
    ]
  }
};
