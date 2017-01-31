import 'dotenv/config';

import express from 'express';
import path from 'path';
import logger from 'morgan';
import webpack from 'webpack';
import vhost from 'vhost';

import expressConfig from './config/express';
import reactRoutes from './config/reactRoutes';
import config from './config/config';
import webpackConfig from '../webpack.config.dev';
import cors from './util/cors';


const compiler = webpack(webpackConfig);
const serverConfig = config.getConfigByEnv();
const app = express();

if (!module.parent) {
  app.use(logger('dev'));
}
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));

// app.use(cors);
expressConfig(app);
reactRoutes(app);

app.listen(serverConfig.port);

// const site = module.exports = express();
// site.use(vhost('dev.furora.media', app));


// if (!module.parent) {
//   site.listen(serverConfig.port, 'localhost', (err) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log(`Listening at http://localhost:${serverConfig.port}`);
//   });
// }
