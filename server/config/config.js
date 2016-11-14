// const path = require('path');

module.exports = {
  test: {
    port: process.env.PORT || 3001,
  },
  development: {
    port: process.env.PORT || 7000,
    mail: {
      api_key: process.env.MG_EMAIL_API_KEY,
      domain: process.env.MG_EMAIL_DOMAIN,
      contact_address: process.env.CONTACT_ADDRESS,
    },
    gmail: {
      client_user: process.env.GMAIL_CLIENT_USER,
      client_id: process.env.GMAIL_CLIENT_ID,
      secret: process.env.GMAIL_CLIENT_SECRET,
      refresh_token: process.env.GMAIL_CLIENT_REFRESH_TOKEN,
      access_token: process.env.GMAIL_CLIENT_ACCESS_TOKEN,
    },
  },
  production: {
    port: process.env.PORT || 80,
    mail: {
      api_key: process.env.MG_EMAIL_API_KEY,
      domain: process.env.MG_EMAIL_DOMAIN,
      contact_address: process.env.CONTACT_ADDRESS,
    },
    gmail: {
      client_user: process.env.GMAIL_CLIENT_USER,
      client_id: process.env.GMAIL_CLIENT_ID,
      secret: process.env.GMAIL_CLIENT_SECRET,
      refresh_token: process.env.GMAIL_CLIENT_REFRESH_TOKEN,
      access_token: process.env.GMAIL_CLIENT_ACCESS_TOKEN,
    },
  },
};
