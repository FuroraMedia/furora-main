import fs from 'fs';


const getToken = (tokenPath) => {
  const token = JSON.parse(fs.readFileSync(tokenPath, 'utf-8', (err) => {
    if (err) throw err;
  }));

  return token.access_token;
};

const storeToken = (tokenPath, token, expiry) => {
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
