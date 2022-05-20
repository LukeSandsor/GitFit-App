// test equality
test('Testing get random user', () => {
  let result = {
    "_id": {
      "$oid": "628457ea4387e28979711f0e"
    },
    "firstname": "Bobby",
    "lastname": "Flay",
    "height": 70,
    "weight": 161
  }

  expect(result).toEqual(
      expect.objectContaining({
          _id: expect.any(Object),
          firstname: expect.any(String),
          lastname: expect.any(String),
          height: expect.any(int),
          weight: expect.any(int)
      })
  );
});
