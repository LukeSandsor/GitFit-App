const mongoose = require("mongoose");
const nutritionModels = require("./nutrition");
const dotenv = require("dotenv");
const { getUser } = require("../user/user-services");
const { create } = require("../health_advice/advice");

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


async function getFoodList() {
  return nutritionModels.NutritionTable.find();
}

async function getUserNutrtition(username) {
  var result = nutritionModels.UserNutrition.findOne( { username: username } );
  return result;
}

async function createUserNutrition(username) {
  return nutritionModels.UserNutrition.insertMany({
    "username": username,
    "nutritionStats": []
  })
}

async function updateUserNutrition(updatedUser) {
  return nutritionModels.UserNutrition.updateOne( 
    { username: updatedUser.username },
    {
      $set: {
        nutritionStats: updatedUser.nutritionStats
      }
    }
  )
}

exports.getFoodList = getFoodList;
exports.getUserNutrtition = getUserNutrtition;
exports.updateUserNutrition = updateUserNutrition;
exports.createUserNutrition = createUserNutrition;