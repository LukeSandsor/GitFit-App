const adviceServices = require('../advice-services');

// data base must also be working for this to pass
test('Testing get random advice', async () => {
  let result = await adviceServices.getAdvice();

  expect(result[0]).toEqual(
      expect.objectContaining({
          _id: expect.any(Object),
          advice: expect.any(String),
          source: expect.any(String)
      })
  );
});
