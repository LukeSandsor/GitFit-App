const passport = require('passport'),
      Strategy = require('passport-local').Strategy,
      { User } = require('../models/user/user'),
      passportJWT = require("passport-jwt"),
      JWTStrategy = passportJWT.Strategy,
      ExtractJWT = passportJWT.ExtractJwt;

// Local Strategy
passport.use(new Strategy( (username, password, done) => {
  User.findOne({username: username}, (err, user) => {
    // If any error
    if (err) { return done(err); }

    if (!user) {
      return done(null, -1, {
        message: 'No user found.'
      });
    }

    user.login(password).then(() => {
      return done(null, user);
    }).catch(() => {
      return done(null, -1, {
        message: 'Password not matched.'
      });
    });
  });
}));

// JWT
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'jwt_secret'
}, (jwt_payload, done) => {
  User.findById(jwt_payload.id).then(user => {
    return done(null, user);
  }).catch(err => {
    // might want to cause logout
    return done(err, false, {
      message: 'Token not matched.'
    });
  });
}));

module.exports = passport;
