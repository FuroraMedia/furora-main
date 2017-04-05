import express from 'express';
import config from './config/config';
import expressConfig from './config/express';
import reactRoutes from './config/reactRoutes';

delete process.env.BROWSER;

const app = express();
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
