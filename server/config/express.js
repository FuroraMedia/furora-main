import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import path from 'path';
import compression from 'compression';
import api from '../api';
import forceSSL from '../util/ssl';

import config from './config';

const serverConfig = config.getConfigByEnv();

// const static = () => {
//   return 
// }

const expressConfig = (app) => {
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');
  app.use(favicon(path.join(__dirname, '../favicon.ico')));
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(forceSSL);
  console.log(serverConfig.path, serverConfig.cacheTime);
  // app.use('/static', express.static(path.join(__dirname, serverConfig.path)));
  app.use('/static', express.static(path.join(__dirname, serverConfig.path), {
    maxAge: serverConfig.cacheTime,
  }));
  app.use('/api/v1', api);
};

export default expressConfig;
