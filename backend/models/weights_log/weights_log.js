const mongoose = require("mongoose");
const weightsModel = require("./weights_history");
const dotenv = require("dotenv");
const { WorkoutModel, UserWorkout } = require("./weights_history");

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

async function addUserWorkout(data) {
    let username = data.username;
    console.log(username);
    let currentDate = new Date();

    if(username)
    {
        let userWorkout = await UserWorkout.findOne({'username': username});
        
        const newWorkout = {
                date: currentDate.getDate(),
                month: currentDate.getMonth() + 1, //starts at zero so for hoi polloi purposes I add 1
                year: currentDate.getFullYear(),
                name: data.name,
                sets: data.sets,
                reps: data.reps,
                weight: data.weight,
                type: data.type
            }


        if(userWorkout)
        {
            userWorkout.workouts.push(newWorkout);
            await UserWorkout.findOneAndUpdate({'username': username },
            {
                'workouts': userWorkout.workouts });
            return true
        }
        else {
            let newData = {username: username, workouts: []};
            let firstWorkout = new UserWorkout(newData);
            firstWorkout.workouts.push(newWorkout);
            await firstWorkout.save();
            return true;
        }
    }
    return false;
}

async function getUserWorkouts(username, name, type) {
    let result = await UserWorkout.findOne({'username': username});
    let workouts = result.workouts;
    console.log(result);
    if(name !== undefined) {
        const filteredResult = workouts.filter(workouts => {
            return workouts.name.includes(name);
        })
        return filteredResult;
    }
    else if(type !== undefined) {
        const filteredResult = workouts.filter(workouts => {
            return workouts.type.includes(type);
        })
        return filteredResult;
    }
    return result;
}

async function getUsers(name, job) {
    let result;
    if((name !== undefined) & (job !== undefined)){
        result = await findUserByJobAndName(job, name);
    }
    else if (job !== undefined){
        result = await findUserByJob(job);
    }
    else if (name !== undefined){
        result = await findUserByName(name)
    }
    else{
        result = await userModel.find();
    }
    return result;
}

exports.getUserWorkouts = getUserWorkouts;
exports.addUserWorkout = addUserWorkout;