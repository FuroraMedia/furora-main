import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import path from 'path';
import compression from 'compression';
import api from '../api';
import forceSSL from '../util/ssl';
import config from './config';

const serverConfig = config.getConfigByEnv();

const expressConfig = (app) => {
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));
  app.set('x-powered-by', false);
  app.use(favicon(path.join(__dirname, '../favicon.ico')));
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  if (process.env.HTTPS_REDIRECT === true) {
    app.use(forceSSL);
  }
  app.use('/static', express.static(path.join(__dirname, '../../client/dist'), {
    maxAge: serverConfig.cacheTime,
  }));
  app.use('/sw.js', express.static(path.join(__dirname, '../../client/dist/sw.js')));
  app.use('/manifest.json', express.static(path.join(__dirname, '../../client/dist/manifest.json')));
  app.use('/sitemap.xml', express.static(path.join(__dirname, '../../client/dist/sitemap.xml')));
  app.use('/api/v1', api);
};

export default expressConfig;
