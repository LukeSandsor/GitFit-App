const weightsModels = require("../weights_history");
const weightsServices = require("../weights_log")
const calendarModel = require("../../calendar/calendar");
const calendarServices = require("../../calendar/calendar-service");
var sinon = require('sinon');


test("Test Workout Schema Entry Equality", () => {
    var entry = new weightsModels.UserWorkout({
        username: "bob123",
        workouts: [
            {
                name: 'Bench'
                
            }
        ]
    });

    expect(entry).toEqual(
        expect.objectContaining({
            username: "bob123",
            workouts: [
            {
                name: 'Bench'
            }
            ],
            _id: expect.any(Object)
        })
    );
});

test("Testing addWorkout pass", async ()=> {
    var requestUser = 'valid_user';
    let expectedData = new weightsModels.UserWorkout({
        username: requestUser,
        workouts: []
    })
    let newCalendar = new calendarModel({
      user: requestUser,
      years: {
        2022: [{},{},{},{4: {mood: '😐'}},{},{},{},{},{},{},{},{}]
      }
    });
    sinon.stub(weightsModels.UserWorkout, 'findOneAndUpdate').returns(expectedData);
    sinon.stub(weightsModels.UserWorkout, 'findOne').returns(expectedData);
    sinon.stub(calendarServices, "getCalendaryByUser").returns(newCalendar);
    sinon.stub(calendarServices, "addInfoToCalendar").returns(newCalendar);

    await weightsServices.addUserWorkout(
        {
        "username": "valid_user",
        "name": "Bench",
        "type": "Push",
        "sets": 1,
        "reps": 1,
        "weight": 5,
        year: 2022,
        month: 3,
        day: 4,
        }
    ).then((res) => {
      expect(res).toBeTruthy();
    });
    sinon.restore()
});

test("Testing addWorkout pass with other calendar branch", async ()=> {
    var requestUser = 'valid_user';
    let expectedData = new weightsModels.UserWorkout({
        username: requestUser,
        workouts: []
    })
    let newCalendar = new calendarModel({
      user: requestUser,
      years: {
        2022: [{},{},{},{4: {mood: '😐', numWork: 5}},{},{},{},{},{},{},{},{}]
      }
    });
    sinon.stub(weightsModels.UserWorkout, 'findOneAndUpdate').returns(expectedData);
    sinon.stub(weightsModels.UserWorkout, 'findOne').returns(expectedData);
    sinon.stub(calendarServices, "getCalendaryByUser").returns(newCalendar);
    sinon.stub(calendarServices, "addInfoToCalendar").returns(newCalendar);

    await weightsServices.addUserWorkout(
        {
        "username": "valid_user",
        "name": "Bench",
        "type": "Push",
        "sets": 1,
        "reps": 1,
        "weight": 5,
        year: 2022,
        month: 3,
        day: 4,
        }
    ).then((res) => {
      expect(res).toBeTruthy();
    });
    sinon.restore();
});

test("Testing addWorkout pass with new user", async ()=> {
    var requestUser = 'valid_user';
    /*let expectedData = new weightsModels.UserWorkout({
        username: requestUser,
        workouts: []
    })*/
    let newCalendar = new calendarModel({
      user: requestUser,
      years: {
        2022: [{},{},{},{4: {mood: '😐', numWork: 5}},{},{},{},{},{},{},{},{}]
      }
    });
    sinon.stub(weightsModels.UserWorkout, 'findOne').returns(false);
    sinon.stub(calendarServices, "getCalendaryByUser").returns(newCalendar);
    sinon.stub(calendarServices, "addInfoToCalendar").returns(newCalendar);
    sinon.stub(weightsModels.UserWorkout.prototype, 'save');


    await weightsServices.addUserWorkout(
        {
        "username": "valid_user",
        "name": "Bench",
        "type": "Push",
        "sets": 1,
        "reps": 1,
        "weight": 5,
        year: 2022,
        month: 3,
        day: 4,
        }
    ).then((res) => {
      expect(res).toBeTruthy();
    });
    sinon.restore();
});

test("Testing addWorkout pass with new user", async ()=> {
    await weightsServices.addUserWorkout(
        {
        }
    ).then((res) => {
      expect(res).toBeFalsy();
    });
});

test("Testing getWorkout pass without name or date", async ()=> {
    sinon.stub(weightsModels.UserWorkout, 'findOne').returns(false);

    await weightsServices.getUserWorkouts(
        "cringe user"
    ).then((res) => {
      expect(res).toBeFalsy();
    });
    sinon.restore();
});

test("Testing getWorkout pass with date", async ()=> {
    var expectedData = 
        new weightsModels.UserWorkout({
        username: "requestUser",
        workouts: [
            {
                type: "type"
            }
        ]
    })

    sinon.stub(weightsModels.UserWorkout, 'findOne').returns(expectedData);

    await weightsServices.getUserWorkouts(
        "cringe user", undefined, "type"
    ).then((res) => {
      expect(res).toEqual([
          {
              "type": "type"
          }
      ]);
    });
    sinon.restore();
});

test("Testing getWorkout pass with name", async ()=> {
    var expectedData = 
        new weightsModels.UserWorkout({
        username: "requestUser",
        workouts: [
            {
                name: "name"
            }
        ]
    })

    sinon.stub(weightsModels.UserWorkout, 'findOne').returns(expectedData);

    await weightsServices.getUserWorkouts(
        "cringe user", "name"
    ).then((res) => {
      expect(res).toEqual([
          {
              "name": "name"
          }
      ]);
    });
    sinon.restore();
});