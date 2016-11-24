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
const app = require('express')();

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const serverConfig = require('./config/config')[env];
require('./config/express')(app);
require('./config/reactRoutes')(app);

app.listen(serverConfig.port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('listening on port', serverConfig.port);
  }
});

module.exports = app;
