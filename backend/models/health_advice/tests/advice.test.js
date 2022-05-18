// test equality
test('Testing get random advice', () => {
  let result = {
    "_id": {
      "$oid": "62634746a456b1df04d04d3a"
    },
    "advice": "Go an entire week without eating fast food. See if you can do it again the next week.",
    "source": "https://www.grmedcenter.com/health-and-wellness-tips/"
  }

  expect(result).toEqual(
      expect.objectContaining({
          _id: expect.any(Object),
          advice: expect.any(String),
          source: expect.any(String)
      })
  );
});
