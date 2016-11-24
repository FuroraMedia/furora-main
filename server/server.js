/* eslint-disable no-console */
require('babel-register')({
  'plugins': [
    [
      'babel-plugin-transform-require-ignore',
      {
        extensions: ['.scss'],
      },
    ],
  ],
});

import express from 'express';
const app = express();
import config from './config/config';
import expressConfig from './config/express';
import reactRoutes from './config/reactRoutes';

const serverConfig = config.getConfigByEnv();

expressConfig(app);
reactRoutes(app);

app.listen(serverConfig.port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('listening on port', serverConfig.port);
  }
});

export default app;
