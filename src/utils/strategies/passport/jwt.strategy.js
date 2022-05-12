/* eslint-disable consistent-return */
const { Strategy, ExtractJwt } = require('passport-jwt');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SEED,
};

const jwtStrategy = new Strategy(options, (payload, done) => done(null, payload));

module.exports = jwtStrategy;
