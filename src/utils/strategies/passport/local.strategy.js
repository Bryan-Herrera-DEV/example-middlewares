/* eslint-disable consistent-return */
const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt');
const UserService = require('../../../server/user/domain/user-model');

const localStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  try {
    UserService.findOne({ email }, (err, user) => {
      if (!user) {
        return done(null, false, { msg: `err` });
      }
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        return done(null, false, { msg: `err` });
      }
      done(null, user);
    });
  } catch (error) {
    done(error, false);
  }
});

module.exports = localStrategy;
