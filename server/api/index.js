import express from 'express';
const routes = express.Router();

import mail from './mail';
routes.use('/mail', mail);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
