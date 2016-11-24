
import express from 'express';
import gmail from './gmail';
import mailGun from './mailGun';

const mail = express.Router();

mail.post('/gmail', gmail);
mail.post('/mailGun', mailGun);

mail.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

export default mail;
