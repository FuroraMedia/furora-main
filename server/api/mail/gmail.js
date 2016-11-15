/* eslint-disable no-console */

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];

const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

const generator = xoauth2.createXOAuth2Generator({
  user: config.gmail.client_user,
  clientId: config.gmail.client_id,
  clientSecret: config.gmail.secret,
  refreshToken: config.gmail.refresh_token,
  accessToken: config.gmail.access_token,
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

module.exports = (req, res) => {
  transporter.sendMail({
    from: req.body.name + req.body.email,
    to: config.mail.contact_address,
    subject: 'GMAIL Website contact',
    text: req.body.message,
  }, (err, info) => {
    if (err) {
      console.log(err);
      res.send('error');
    } else {
      console.log('Message sent: ' + info);
      res.end('sent');
    }
  });
};
