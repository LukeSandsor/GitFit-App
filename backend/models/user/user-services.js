const { User } = require('./user');

async function deleteUser(id) {
  try {
      const result = await User.findByIdAndDelete(id);
      return result;
  } catch (error) {
      // console.log(error);
      return null;
  }
}

exports.deleteUser = deleteUser;
