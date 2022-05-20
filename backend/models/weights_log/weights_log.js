const mongoose = require("mongoose");
const weightsModel = require("./weights_history");
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

async function addWorkout(workout) {
    try {
        const userToAdd = new weightsModel(workout);
        const savedUser = await userToAdd.save();
        return savedUser;
    } 
    catch (error) {
        console.log(error);
        return false;
    }
}

async function getWorkoutCount() {
  let result = await weightsModel.estimatedDocumentCount();
  return result;
}

async function getWorkoutByName(name) {
    let result;
    if(name !== undefined)
        return weightsModel.find({ name: name });
    return result;
}

async function getWorkoutByWeight(weight) {
    let result;
    if(weight !== undefined)
        return weightsModel.find({ weight: weight });
    return result;
}

async function getWorkoutByDate(date) {
    let result;
    if(date !== undefined)
        return weightsModel.find({ date: date});
}