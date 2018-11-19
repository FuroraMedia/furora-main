
import express from 'express';
import gmail from './gmail';

const mail = express.Router();

if (process.env.GMAIL_ACTIVE_STATUS) {
  mail.post('/', gmail);
}

export default mail;
