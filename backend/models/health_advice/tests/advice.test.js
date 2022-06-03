const adviceModel = require('../advice'),
      adviceServices = require('../advice-services'),
      sinon = require('sinon');

// test equality
test('Testing get random advice', () => {
  let result = new adviceModel({
    "advice": "Go an entire week without eating fast food. See if you can do it again the next week.",
    "source": "https://www.grmedcenter.com/health-and-wellness-tips/"
  });

  expect(result).toEqual(
      expect.objectContaining({
          _id: expect.any(Object),
          advice: expect.any(String),
          source: expect.any(String)
      })
  );
});

test('Testing get advice', async () => {
  let returnAdvice = new adviceModel({
    advice: 'advice text',
    source: 'source text'
  });

  sinon.stub(adviceModel, 'estimatedDocumentCount').returns(2);
  sinon.stub(adviceModel, 'find').returns([returnAdvice, returnAdvice]);

  await adviceServices.getAdvice().then((res) => {
    expect(res).toBe(returnAdvice);
  });

  sinon.restore();
});
