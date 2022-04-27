const mongoose = require("mongoose");
const adviceModel = require("./advice");
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

async function getAdviceCount() {
  let result = await adviceModel.estimatedDocumentCount();
  console.log(result);

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
