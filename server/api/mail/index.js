
const mail = require('express').Router();

// const gmail = require('./gmail');
const mailGun = require('./mailGun');

// mail.post('/gmail', gmail);
mail.post('/mailGun', mailGun);

mail.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = mail;
