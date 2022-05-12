const jwt = require('jsonwebtoken');

const response = require("../../../middlewares/responses.handler");

const userLogin = (req, res) => {
  const usuarioDB = req.user;

  const token = jwt.sign({
    user: usuarioDB,
  }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

  response.normalResponse(res, {
    token,
    user: usuarioDB,
  });
};

module.exports = {
  userLogin,
};
