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

