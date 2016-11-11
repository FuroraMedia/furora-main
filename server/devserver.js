/* eslint func-names: ["error", "never"] */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
// var compression = require('compression');
const config = require('../webpack.config.dev');
// var config = require('./webpack.config.prod');
const favicon = require('serve-favicon');

const port = 7000;
const app = express();
// app.use(compression());

const compiler = webpack(config);
app.use(favicon(path.join(__dirname, '../client/public/favicon.ico')));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

// app.use('/static', express.static(path.join(__dirname, '../client/src')));


app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});
