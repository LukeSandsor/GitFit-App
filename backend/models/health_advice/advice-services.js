const adviceModel = require("./advice");

async function getAdviceCount() {
  let result = await adviceModel.estimatedDocumentCount();

  return result;
}

// calculates a random index based on the size of the collection
var rand = (adviceCount) => {return Math.floor( Math.random() * adviceCount)};

async function findRandomAdvice() {
  // want to be able to store advice count in global var
  let adviceCount = await getAdviceCount();
  return await adviceModel.find().limit(1).skip(rand(adviceCount));
}

// just random for now
async function getAdvice() {
  return await findRandomAdvice();
}

exports.getAdvice = getAdvice;
