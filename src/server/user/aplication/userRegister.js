const bcrypt = require('bcrypt');
const response = require("../../../middlewares/responses.handler");
const User = require('../domain/user-model');

const userRegister = (req, res) => {
  const { body } = req;
  try {
    User.findOne({ email: body.email }, (err, user) => {
      if (err) {
        response.internalServerError(res, err);
      } else if (user || (body.email.indexOf('@') === -1 || body.email.indexOf('.') === -1)) {
        response.badRequest(res, {
          message: 'Email invalid',
        });
      } else if (body.passwordlength < 6) {
        response.badRequest(res, {
          message: 'Password must be at least 6 characters',
        });
      } else {
        const newUser = new User({
          name: body.name.replace(/[&/\\#,+()$~%.:*?<>{}]/g, ''),
          email: body.email,
          password: bcrypt.hashSync(body.password, 15),
          role: 'USER_ROLE',
        });
        try {
          newUser.save((errU, userU) => {
            if (errU) {
              response.internalServerError(res, err, 500);
            } else {
              response.created(res, {
                message: 'User created successfully',
                user: userU,
              });
            }
          });
        } catch (errorDD) {
          response.internalServerError(res, errorDD);
        }
      }
    });
  } catch (error) {
    response.internalServerError(res, error);
  }
};

module.exports = {
  userRegister,
};
