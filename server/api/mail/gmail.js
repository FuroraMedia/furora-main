/* eslint-disable no-console */

// const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// const config = require('../../config/config')[env];
import nodemailer from 'nodemailer';
import xoauth2 from 'xoauth2';

import config from '../../config/config';
const serverConfig = config.getConfigByEnv();
console.log(process.env.NODE_ENV, serverConfig);


const generator = xoauth2.createXOAuth2Generator({
  user: serverConfig.gmail.client_user,
  clientId: serverConfig.gmail.client_id,
  clientSecret: serverConfig.gmail.secret,
  refreshToken: serverConfig.gmail.refresh_token,
  accessToken: serverConfig.gmail.access_token,
});

generator.on('token', (token) => {
  console.log('New token for %s: %s', token.user, token.accessToken);
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    xoauth2: generator,
  },
});

const gmail = (req, res) => {
  console.log(req.body.name, req.body.email, serverConfig.mail.contact_address, req.body.message)
  transporter.sendMail({
    from: req.body.name + req.body.email,
    to: serverConfig.mail.contact_address,
    subject: 'GMAIL Website contact',
    text: req.body.message,
  }, (err, info) => {
    if (err) {
      console.log(err);
      res.send('error');
    } else {
      console.log(`Message sent:, ${info}`);
      res.end('sent');
    }
  });
};

export default gmail;
