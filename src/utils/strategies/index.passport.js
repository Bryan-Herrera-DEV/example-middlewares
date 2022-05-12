const passport = require('passport');

const localStrategy = require('./passport/local.strategy');
const jwtStrategy = require('./passport/jwt.strategy');

passport.use('local', localStrategy);
passport.use('jwt', jwtStrategy);

module.exports = passport;
