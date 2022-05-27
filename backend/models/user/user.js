const mongoose = require("mongoose"),
      bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        index: true,
        unique: true,
        minlength: 2,
        maxlength: 16,
        lowercase: true,
        required: true,
    
      },
      password: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      gender: {
          type: String,
          required: true,
          trim: true
      },
      birthday: {
        type: String,
        required: false,
      },
      height: {
          type: Number,
          required: true,
          trim: true
      },
      weight: {
          type: Number,
          required: true,
          trim: true
      },
      firstname: {
        type: String,
        required: true,
        trim: true
      },
      lastname: {
          type: String,
          required: true,
          trim: true
      },
    },
    { collection: 'user_list' }
);

// Hash password before saving
UserSchema.pre('save', userPreSaveHook);

// async function that hashes user password
async function userPreSaveHook(next) {
  var user = this;

  // If not registration
  if ( !user.isModified('password') ) return next();

  // hash the password
  user.password = await bcrypt.hash(user.password, 10);
  next();
};

// Password verification
UserSchema.methods.login = function(password) {
  var user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, result) => {
      if ( err || !result ) { reject(err); }
      resolve(result);
    });
  });
}

const User = mongoose.model('user', UserSchema);

module.exports = {
  User,
  userPreSaveHook
};
