const { User } = require('./user');

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
