var mongoose = require('mongoose'),
    sinon = require('sinon');

const calendarModel = require("../calendar");
const calendarServices = require("../calendar-service");

// test equality
test('Testing calendar equality', () => {
  let result = {"_id": {"$oid": "627db99ae3f6ad43845ea914"},"years":{"2021":[{"4":{"mood":"😬","calCons":2000,"calLost":200},"19":{"mood":"😐","calCons":2000,"calLost":200}},{},{},{"18":{"mood":"😐","calCons":2000,"calLost":200}},{},{},{},{"3":{"mood":"😡","calCons":2000,"calLost":200},"4":{"mood":"😬","calCons":2000,"calLost":200},"19":{"mood":"😐","calCons":2000,"calLost":200}},{},{},{},{}]},"user":"guest2"}

  expect(result).toEqual(
      expect.objectContaining({
          _id: expect.any(Object),
          user: expect.any(String),
          years: expect.any(Object)
      })
  );
});

test('Testing calendar get with valid user', () => {
  // mock request
  var requestUser = 'valid_user';
  let expectedData = new calendarModel({
    user: requestUser,
    years: {}
  });

  sinon.stub(calendarModel, 'findOne').returns(expectedData);

  calendarServices.getCalendaryByUser(requestUser).then((res) => {
    expect(res).toEqual(expectedData);
  });

  sinon.restore();
});

describe('addInfoToCalendar Tests', () => {
  test('should successfully add new data to empty calendar', async () => {
    var requestUser = 'valid_user';
    let passData = {
      year: 2022,
      month: 3,
      day: 4,
      user: requestUser,
      mood: '😐'
    };
    let oldCalendar = new calendarModel({
      user: requestUser,
      years: {
        2022: [{},{},{},{},{},{},{},{},{},{},{},{}]
      }
    });
    let newCalendar = new calendarModel({
      user: requestUser,
      years: {
        2022: [{},{},{},{4: {mood: '😐'}},{},{},{},{},{},{},{},{}]
      }
    });
    
    sinon.stub(calendarModel, 'findOne').returns(oldCalendar);
    sinon.stub(calendarModel, 'findOneAndUpdate').returns(newCalendar);

    await calendarServices.addInfoToCalendar(passData).then((res) => {
      expect(res).toBeTruthy();
    })

    sinon.restore();
  });

  test('should successfully create new calendar', async () => {
    var requestUser = 'valid_user';
    let passData = {
      year: 2022,
      month: 3,
      day: 5,
      user: requestUser,
      numWork: 4
    };
    let oldCalendar = undefined; // user doesn't exist in db
    let newCalendar = new calendarModel({
      user: requestUser,
      years: {
        2022: [{},{},{},{5: {numWork: 4}},{},{},{},{},{},{},{},{}]
      }
    });

    sinon.stub(calendarModel, 'findOne').returns(oldCalendar);
    sinon.stub(calendarModel.prototype, 'save');

    await calendarServices.addInfoToCalendar(passData);

    sinon.restore();
  });

  test('test when improper params are given', async () => {
    let passData = {};
    
    await calendarServices.addInfoToCalendar(passData).then((res) => {
      expect(res).toBeFalsy();
    });
  });

  test('test with day that has data', async () => {
    var requestUser = 'valid_user';
    let passData = {
      year: 2022,
      month: 3,
      day: 4,
      user: requestUser,
      mood: '😐'
    };
    let oldCalendar = new calendarModel({
      user: requestUser,
      years: {
        2022: [{},{},{},{4: {numStep: 678}},{},{},{},{},{},{},{},{}]
      }
    });
    let newCalendar = new calendarModel({
      user: requestUser,
      years: {
        2022: [{},{},{},{4: {numStep: 678, mood: '😐'}},{},{},{},{},{},{},{},{}]
      }
    });
    
    sinon.stub(calendarModel, 'findOne').returns(oldCalendar);
    sinon.stub(calendarModel, 'findOneAndUpdate').returns(newCalendar);

    await calendarServices.addInfoToCalendar(passData).then((res) => {
      expect(res).toBeTruthy();
    });

    sinon.restore();
  });

  test('test with calendar with uninitialized year array', async () => {
    var requestUser = 'valid_user';
    let passData = {
      year: 2022,
      month: 3,
      day: 4,
      user: requestUser,
      mood: '😐'
    };
    let oldCalendar = new calendarModel({
      user: requestUser,
      years: {
        2022: []
      }
    });
    let newCalendar = new calendarModel({
      user: requestUser,
      years: {
        2022: [{},{},{},{4: {mood: '😐'}},{},{},{},{},{},{},{},{}]
      }
    });
    
    sinon.stub(calendarModel, 'findOne').returns(oldCalendar);
    sinon.stub(calendarModel, 'findOneAndUpdate').returns(newCalendar);

    await calendarServices.addInfoToCalendar(passData).then((res) => {
      expect(res).toBeTruthy();
    });

    sinon.restore();
  });
});
