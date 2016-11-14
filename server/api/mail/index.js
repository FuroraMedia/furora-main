
const mailGun = require('./mailGun');
const Gmail = require('./gmail');

module.exports = function (app, env) {
  app.post('/mail', mailGun);
  app.post('/gmail', Gmail);
};
