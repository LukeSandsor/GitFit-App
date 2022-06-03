const nutritionModels = require("./nutrition");
const { create } = require("../health_advice/advice");

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