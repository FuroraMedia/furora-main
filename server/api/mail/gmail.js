/* eslint-disable no-console */

import nodemailer from 'nodemailer';
import config from '../../config/config';
const serverConfig = config.getConfigByEnv();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: serverConfig.gmail.client_user,
    clientId: serverConfig.gmail.client_id,
    clientSecret: serverConfig.gmail.secret,
    refreshToken: serverConfig.gmail.refresh_token,
    accessToken: serverConfig.gmail.access_token,
  },
});

transporter.on('token', token => {
  console.log('A new access token was generated');
  console.log('User: %s', token.user);
  console.log('Access Token: %s', token.accessToken);
  console.log('Expires: %s', new Date(token.expires));
});

const gmail = (req, res, next) => {

  if (serverConfig.gmail.isActive) {
    if (req.body.name === '' || req.body.email === '' || req.body.message === '') {
      return res.status(401).json({ message: 'All fields are required' });
    }

    transporter.sendMail({
      from: req.body.name + req.body.email,
      to: serverConfig.gmail.client_user,
      subject: 'FURORA-FORM contact from ' + req.body.name + ' @ ' + req.body.email,
      text: req.body.message,
    }, (err, info) => {
      if (err) {
        console.log(err);
        res.send('error');
      } else {
        console.log('Message sent', info);
        res.end('sent');
      }
    });
  } else {
    res.end('gmail is currently disabled');
  }
};

export default gmail;
