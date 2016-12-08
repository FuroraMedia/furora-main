/* eslint func-names: ["error", "never"] */
require('dotenv').config();
// require('babel-register')();

import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import path from 'path';
import logger from 'morgan';
import webpack from 'webpack';

import config from './config/config';
import webpackConfig from '../webpack.config.dev';
import api from './api';

const compiler = webpack(webpackConfig);
const serverConfig = config.getConfigByEnv();

const app = express();
// app.use(compression());

app.use(favicon(path.join(__dirname, '/favicon.ico')));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
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
