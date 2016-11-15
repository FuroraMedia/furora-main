
const routes = require('express').Router();

const mail = require('./mail');

routes.use('/mail', mail);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
