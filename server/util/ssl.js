const forceSSL = (req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect(['https://', req.get('Host'), req.url].join(''));
    } else {
      next();
    }
  }
};

export default forceSSL;
