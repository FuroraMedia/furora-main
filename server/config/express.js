import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import path from 'path';
import compression from 'compression';
import api from '../api';
import forceSSL from '../util';

const expressConfig = (app) => {
  app.use(favicon(path.join(__dirname, '../favicon.ico')));
  app.use(compression());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(forceSSL);
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  app.use('/static', express.static(path.join(__dirname, '../../client/dist')));
  app.use('/api/v1', api);
};

export default expressConfig
