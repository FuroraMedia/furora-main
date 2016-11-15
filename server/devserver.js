/* eslint func-names: ["error", "never"] */
require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
// var compression = require('compression');
const config = require('../webpack.config.dev');
// var config = require('./webpack.config.prod');

const logger = require('morgan');
const favicon = require('serve-favicon');

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const serverConfig = require('./config/config')[env];
const api = require('./api');

const app = express();
// app.use(compression());

const compiler = webpack(config);
app.use(favicon(path.join(__dirname, '/favicon.ico')));


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(logger('dev'));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.use('/static', express.static(path.join(__dirname, '../client/public')));


app.use('/api/v1', api);

app.listen(serverConfig.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + serverConfig.port);
});
