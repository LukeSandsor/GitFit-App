const mongoose = require("mongoose");
const { User } = require('./user');
const dotenv = require("dotenv");

dotenv.config();
mongoose.set("debug", true);

const cluster = process.env.MONGO_CLUSTER;
const database = process.env.MONGO_DB;
const username = process.env.MONGO_USER;
const userpass = process.env.MONGO_PWD;

// use github environments to set username and password for default users
// database will hopefully be fine"mongodb+srv://" +
mongoose.connect(`mongodb+srv://${username}:${userpass}@${cluster}/${database}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((error) => console.log(error));

async function getUser() {
    return await User.find().limit(1);
}

async function deleteUser(id) {
  try {
      const result = await User.findByIdAndDelete(id);
      return result;
  } catch (error) {
      console.log(error);
      return null;
  }
}

exports.getUser = getUser;
exports.deleteUser = deleteUser;
