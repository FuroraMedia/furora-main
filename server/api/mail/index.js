
import express from 'express';
import gmail from './gmail';
import mailGun from './mailGun';

const mail = express.Router();

if (process.env.GMAIL_ACTIVE_STATUS) {
  mail.post('/', gmail);
} else {
  mail.post('/', mailGun);
}

export default mail;
