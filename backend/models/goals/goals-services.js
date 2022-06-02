const goalModel = require("./goals");

async function getGoalList() {
  return goalModel.GoalList.find();
}

exports.getGoalList = getGoalList;