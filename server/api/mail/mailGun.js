import mg from 'nodemailer-mailgun-transport';
import nodemailer from 'nodemailer';

import config from '../../config/config';
const serverConfig = config.getConfigByEnv();

const auth = {
  auth: {
    api_key: serverConfig.mail.api_key,
    domain: serverConfig.mail.domain,
  },
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

module.exports = (req, res) => {
  nodemailerMailgun.sendMail({
    from: req.body.email,
    to: serverConfig.mail.contact_address,
    subject: 'MAILGUN site Website contact',
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
