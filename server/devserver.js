import 'dotenv/config';

import express from 'express';
import vhost from 'vhost';
import logger from 'morgan';
import webpack from 'webpack';
import expressConfig from './config/express';
import reactRoutes from './config/reactRoutes';
import config from './config/config';
import webpackConfig from '../webpack.config.dev';
import cors from './util/cors';

const compiler = webpack(webpackConfig);
const serverConfig = config.getConfigByEnv();
const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(cors);
expressConfig(app);
reactRoutes(app);

const site = express();
site.use(vhost('dev.furora.media', app));

// if (!module.parent) {
  site.listen(serverConfig.port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Listening at dev.furora.media:${serverConfig.port}`);
  });
// }
