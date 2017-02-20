import fs from 'fs';
import path from 'path';
import config from '../../config/config';
const serverConfig = config.getConfigByEnv();
const tokenPath = path.join(__dirname, serverConfig.gmail.token_file);

const getToken = () => {
  const token = JSON.parse(fs.readFileSync(tokenPath, 'utf-8'));
  return token.access_token;
};

const storeToken = (token, expiry) => {
  try {
    fs.mkdirSync('./');
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }

  const tokenObj = {
    access_token: token,
    token_expiry: expiry,
  };

  fs.writeFile(tokenPath, JSON.stringify(tokenObj), 'utf-8', (err) => {
    if (err) throw err;
  });
};

export { getToken, storeToken };
