const Config = {
  test: {
    port: process.env.PORT || 3001,
  },
  development: {
    path: '../../client/public',
    port: process.env.PORT || 8888,
    cacheTime: process.env.CACHE_TIME,
    mail: {
      isActive: process.env.MAIL_ACTIVE_STATUS,
      api_key: process.env.MG_EMAIL_API_KEY,
      domain: process.env.MG_EMAIL_DOMAIN,
      contact_address: process.env.CONTACT_ADDRESS,
    },
    gmail: {
      isActive: process.env.GMAIL_ACTIVE_STATUS,
      client_user: process.env.GMAIL_CLIENT_USER,
      client_id: process.env.GMAIL_CLIENT_ID,
      secret: process.env.GMAIL_CLIENT_SECRET,
      refresh_token: process.env.GMAIL_CLIENT_REFRESH_TOKEN,
      access_token: process.env.GMAIL_CLIENT_ACCESS_TOKEN,
      token_file: process.env.GMAIL_CLIENT_TOKEN_FILE || 'helper.json',
    },
  },
  production: {
    path: '../../client/dist',
    port: process.env.PORT || 8080,
    cacheTime: process.env.CACHE_TIME,
    mail: {
      isActive: process.env.MAIL_ACTIVE_STATUS,
      api_key: process.env.MG_EMAIL_API_KEY,
      domain: process.env.MG_EMAIL_DOMAIN,
      contact_address: process.env.CONTACT_ADDRESS,
    },
    gmail: {
      isActive: process.env.GMAIL_ACTIVE_STATUS,
      client_user: process.env.GMAIL_CLIENT_USER,
      client_id: process.env.GMAIL_CLIENT_ID,
      secret: process.env.GMAIL_CLIENT_SECRET,
      refresh_token: process.env.GMAIL_CLIENT_REFRESH_TOKEN,
      access_token: process.env.GMAIL_CLIENT_ACCESS_TOKEN,
      token_file: process.env.GMAIL_CLIENT_TOKEN_FILE || 'helper.json',
    },
  },
};

const getConfigByEnv = () => {
  const env = process.env.NODE_ENV || 'development';
  return Config[env];
};

Config.getConfigByEnv = getConfigByEnv;
export default Config;
