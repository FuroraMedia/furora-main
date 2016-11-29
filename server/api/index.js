import express from 'express';
import mail from './mail';

const routes = express.Router();

routes.use('/mail', mail);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

export default routes;
