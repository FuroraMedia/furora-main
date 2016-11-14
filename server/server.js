/* eslint-disable no-console */

const app = require('express')();

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const serverConfig = require('./config/config')[env];

require('./config/express')(app);

app.listen(serverConfig.port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('listening on port', serverConfig.port);
  }
});

module.exports = app;
