/* eslint-disable no-console */

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const config = require('../../config/config')[env];

const auth = {
  auth: {
    api_key: config.mail.api_key,
    domain: config.mail.domain,
  },
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

module.exports = (req, res) => {
  nodemailerMailgun.sendMail({
    from: req.body.email,
    to: config.mail.contact_address,
    subject: 'Website contact',
    text: 'Hello from' + req.body.name + '<br />' + req.body.message,
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
