const forceSSL = (req, res, next) => {
  
  if (req.headers['x-forwarded-proto'] !== 'https') {
    res.redirect(['https://', req.get('Host'), req.url].join(''));
  } else {
    next();
  }
};

export default forceSSL;
