const allowedCors = [
  'https://thewargas.nomoredomains.monster',
  'http://thewargas.nomoredomains.monster',
  'https://api.thewargas.nomoredomains.monster',
  'http://api.thewargas.nomoredomains.monster',
  'http://localhost:3003',
  'https://localhost:3003',
];

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  return next();
};