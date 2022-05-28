const express = require('express'),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      // add all models with user information for deletion
      { User } = require('../models/user/user'),
      calendarModel = require('../models/calendar/calendar'),
      userServices = require('../models/user/user-services'),
      router = express.Router();

/* API entrypoints */
// Singup
router.post('/signup', async (req, res) => {
  // check params
  // make sure username is unique
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
    res.json({username: user.username, token: token});

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
      const token = jwt.sign({id: req.user._id}, 'jwt_secret');
      res.status(201).json({username: req.user.username, token: token});
    }
    else {
      res.status(401).send(req.authInfo); // send 401 response with message
    }
  }
);

// change an entry in the user data
router.post('/user', passport.authenticate('jwt', {
  session: false
}), async (req, res) => {

    await User.findOneAndUpdate({user: req.user.username}, {'$set': req.body}).then((result) => {
      if (result === null) {
        res.status(404).send('Resource not found.\n');
      }
      else {
        res.status(201).end();
      }
    });
  }
);

// delete user account and info
router.delete('/user', passport.authenticate('jwt', {
  session: false
}), async (req, res) => {
    const userIDToDelete = req.user.id;

    // result should be the object that was delete or null
    let result = await userServices.deleteUser(userIDToDelete);

    // delete user information
    await calendarModel.findOneAndDelete({user: req.user.username});
    // add more later

    if (result === null) {
      res.status(404).send('Resource not found.\n');
    }
    else {
      res.status(204).end();
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

  res.json(req.user);
});

module.exports = router;
