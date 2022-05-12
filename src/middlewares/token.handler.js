// verifi de rutas, verif roles
const response = require('./responses.handler');

const tokenExists = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return response.unauthorized(res, {
      message: 'Token not found',
    });
  }
  return next();
};

module.exports = {
  tokenExists,
};
