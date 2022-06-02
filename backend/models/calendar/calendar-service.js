const calendarModel = require("./calendar");

async function getCalendaryByUser(username) {
  let result = await calendarModel.findOne({'user': username});

  return result;
}

// inefficient should be changed
// look up how to upsert
async function addInfoToCalendar(data) {
  let username = data.user;
  
  // set current date and values
  // these should be provided by requester
  let currentYear = data.year;
  let currentMonth = data.month;
  let currentDay = data.day;

  // check if data is formatted properly
  // there must be a user field to check the database
  if (username && currentYear && currentMonth && currentDay) {
    let userCalendar = await calendarModel.findOne({'user': username});

    if (userCalendar) {
      let monthData = userCalendar.years[currentYear][currentMonth];

      if (monthData) {
        // initialize currentDay object if it does not yet exist
        if (monthData[currentDay] === undefined) {
          monthData[currentDay] = {};
        }
        const excludes = ['user', 'year', 'month', 'day'];

        const filteredData = Object.keys(data)
          .filter(key => !(excludes.includes(key)))
          .reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
          }, {});

        // add data to month
        Object.entries(filteredData).forEach(([key, value]) => {
            monthData[currentDay][key] = value;
        });
      }

      // save the updated object in the db
      await calendarModel.findOneAndUpdate(
        { user: username }, 
        userCalendar,
        { new: true }
      );

      return true;
    }
    else {

      // potentially want to verify that the user is real
      // maybe look in another database
      let newData = {user: username, years: {}};

      // must follow the schema
      // twelve empty month objects for this year
      newData.years[currentYear] = [];
      for (let i = 0; i < 12; i++) {
        newData.years[currentYear].push({});
      }

      // need to add an empty object to the day key
      newData.years[currentYear][currentMonth][currentDay] = {};

      // go through each key in the new data and update the day data
      // ignore the user key
      Object.entries(data).forEach(([key, value]) => {
        if (key !== 'user') {
          newData.years[currentYear][currentMonth][currentDay][key] = value;
        }
      });

      let newCalendar = new calendarModel(newData);
      await newCalendar.save();
      return true;
    }
  }

  // User field does not exist
  return false;
}

exports.getCalendaryByUser = getCalendaryByUser;
exports.addInfoToCalendar = addInfoToCalendar;
