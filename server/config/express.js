const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const compression = require('compression');
const api = require('../api');

module.exports = (app) => {
  app.use(favicon(path.join(__dirname, '../favicon.ico')));
  // app.use(compression());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  app.use(bodyParser.json());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  // app.get('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  // });

  app.use('/static', express.static(path.join(__dirname, '../../client/dist')));
  app.use('/api/v1', api);
};
