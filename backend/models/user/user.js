const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
    {
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
    },
    { collection: "personalInfoTest" }
);

// Hash password before saving
UserSchema.pre('save', function(next) {
  var user = this;

  // If not registration
  if ( !user.isModified('password') ) return next();

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

// Password verification
UserSchema.methods.login = function(password) {
  var user = this
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, result) => {
      if ( err ) { reject(err) }
      resolve()
    })
  })
}

const User = mongoose.model("user", UserSchema);

module.exports = User
