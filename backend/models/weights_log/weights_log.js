const weightsModel = require("./weights_history");
const calendarServices = require("../calendar/calendar-service");
const { WorkoutModel, UserWorkout } = require("./weights_history");

async function addUserWorkout(data) {
  let username = data.username;

  // set current date and values
  // these should be provided by requester
  let currentYear = data.year;
  let currentMonth = data.month;
  let currentDay = data.day;

  // check if data is formatted properly
  // there must be a user field to check the database
  if (username && currentYear && currentMonth && currentDay) {

    let userWorkout = await UserWorkout.findOne({'username': username});
    
    const newWorkout = {
            date: currentDay,
            month: currentMonth + 1, //starts at zero so for hoi polloi purposes I add 1
            year: currentYear,
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
        {'workouts': userWorkout.workouts });

      // add to calendar at same time
      const calendar = await calendarServices.getCalendaryByUser(username);
      if (calendar['years'][currentYear][currentMonth][currentDay]['numWork'] !== undefined) {
        await calendarServices.addInfoToCalendar({
          year: currentYear,
          month: currentMonth,
          day: currentDay,
          user: username,
          numWork: calendar['years'][currentYear][currentMonth][currentDay]['numWork'] + 1});
      }
      else {
        await calendarServices.addInfoToCalendar({
          year: currentYear,
          month: currentMonth,
          day: currentDay,
          user: username, 
          numWork: 1
        });
      }
      return true
    }
    else {
        let newData = {username: username, workouts: []};
        let firstWorkout = new UserWorkout(newData);
        firstWorkout.workouts.push(newWorkout);
        await calendarServices.addInfoToCalendar({
          year: currentYear,
          month: currentMonth,
          day: currentDay,
          user: username, 
          numWork: 1
        });
        await firstWorkout.save();
        return true;
    }
  }
  return false;
}

async function getUserWorkouts(username, name, type) {
    let result = await UserWorkout.findOne({'username': username});
    let workouts = result.workouts;
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