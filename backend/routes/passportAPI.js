const express = require('express'),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      User = require('../models/user/user'),
      router = express.Router();

/* API entrypoints */
// Singup
router.post('/signup', (req, res) => {
  var user = new User({
    username: req.body.username,
    password: req.body.password,
    weight: 150,
    height: 170,
    firstname: 'Jeff',
    lastname: 'MyName'
  });

  console.log(user);

  user.save().then(() => {

    // Token
    const token = jwt.sign({id: user._id}, 'jwt_secret');
    res.json({token: token});

  }).catch((err) => {
    console.error(err);
    res.status(500).json({});
  })
});

// Login
router.post('/login', passport.authenticate('local', {
    session: false
  }), (req, res) => {
  console.log(req);
  console.log(req.body);
  console.log(req.user);
  // Token
  const token = jwt.sign({id: req.user.id}, 'jwt_secret')

  res.json({token: token})
});

// Return user data
router.get('/user', passport.authenticate('jwt', {
  session: false
  }), (req, res) => {
    if ( !req.user ) {
      res.json({
        username: 'nobody'
      });
    }

  res.json({
    username: req.user.username
  });
});

module.exports = router
