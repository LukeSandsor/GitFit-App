const mongoose = require("mongoose");
const adviceModel = require("./advice");
mongoose.set("debug", true);

const database = 'gitfit-app';
const collection = 'gitfit-app';
const username = 'default_user';
const userpass = 'user_access';

// in the future use github environments to set username and password for default users
// database will hopefully be fine
mongoose
  .connect(`mongodb+srv://${username}:${userpass}@${database}.jtey1.mongodb.net/${collection}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((error) => console.log(error));

async function getAdviceCount() {
  let result = await adviceModel.estimatedDocumentCount();
  console.log(result);

  return result;
}


var rand = (adviceCount) => {return Math.floor( Math.random() * adviceCount)};

async function findRandomAdvice() {
  let adviceCount = await getAdviceCount();
  return await adviceModel.find().limit(1).skip(rand(adviceCount));
}

// just random for now
async function getAdvice() {
    return await findRandomAdvice();
}

exports.getAdvice = getAdvice;
