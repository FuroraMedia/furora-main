/* eslint-disable no-console */

import nodemailer from 'nodemailer';
import path from 'path';
import config from '../../config/config';
import { getToken, storeToken } from './oauth';

const serverConfig = config.getConfigByEnv();
const tokenPath = path.join(__dirname, serverConfig.gmail.token_file);
const accessTokenKey = getToken(tokenPath);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: serverConfig.gmail.client_user,
    clientId: serverConfig.gmail.client_id,
    clientSecret: serverConfig.gmail.secret,
    refreshToken: serverConfig.gmail.refresh_token,
    accessToken: accessTokenKey,
  },
});

transporter.on('token', (token) => {
  console.log('A new access token was generated');
  console.log('User: %s', token.user);
  console.log('Access Token: %s', token.accessToken);
  console.log('Expires: %s', new Date(token.expires));
  storeToken(tokenPath, token.accessToken, token.expires);
});

const gmail = (req, res) => {
  if (serverConfig.gmail.isActive) {
    if (req.body.name === '' || req.body.email === '' || req.body.message === '') {
      return res.status(401).json({ message: 'All fields are required' });
    }
    res.status(200).json({ message: 'Thank you for the mail' });
    // transporter.sendMail({
    //   from: req.body.name + req.body.email,
    //   to: serverConfig.gmail.client_user,
    //   subject: `FURORA-FORM contact from ${req.body.name} @ ${req.body.email}`,
    //   text: req.body.message,
    // }, (err, info) => {
    //   if (err) {
    //     console.log(err);
    //     res.send('error');
    //   } else {
    //     console.log('Message sent', info);
    //     res.end('sent');
    //   }
    // });
  } else {
    res.end('gmail is currently disabled');
  }
};

export default gmail;
