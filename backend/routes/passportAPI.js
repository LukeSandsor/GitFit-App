const express = require('express'),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      User = require('../models/user/user'),
      router = express.Router();

/* API entrypoints */
// Singup
router.post('/signup', async (req, res) => {
  // check params
  // make sure username is unique
  console.log(req.body.username);
  let submittedUser = await User.findOne({username: req.body.username});
  if (submittedUser) {
    res.status(401).send('username already exists');
    return;
  }

  let submittedEmail = await User.findOne({email: req.body.email});
  if (submittedEmail) {
    res.status(401).send('email already associate with account');
    return;
  }

  var user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    gender: req.body.gender,
    birthday: req.body.birthday,
    weight: req.body.weight,
    height: req.body.height,
    firstname: req.body.firstname,
    lastname: req.body.lastname
  });

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
    if (req.user != -1) {
      // create and send Token
      const token = jwt.sign({id: req.user._id}, 'jwt_secret')
      res.status(201).json({token: token});
    }
    else {
      res.status(401).send(req.authInfo); // send 401 response with message
    }
  }
);

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

module.exports = router;
