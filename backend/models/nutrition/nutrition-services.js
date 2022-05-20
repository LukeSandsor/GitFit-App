const mongoose = require("mongoose");
const nutritionModels = require("./nutrition");
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


async function getFoodList() {
  return nutritionModels.NutritionTable.find();
}

async function getUserNutrtition(username) {
  return nutritionModels.UserNutrition.findOne( { username: username } )
}

exports.getFoodList = getFoodList;
exports.getUserNutrtition = getUserNutrtition;