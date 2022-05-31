const express = require('express'),
      calendarServices = require('../models/calendar/calendar-service'),
      router = express.Router();

router.get('/', async (req, res) => {
  const username = req.query['user'];
  try {
      const result = await calendarServices.getCalendaryByUser(username);
      if (result)
        res.send(result); // 200 ok response
      else
        res.status(204).send('User not found');
  } catch (error) {
      console.log(error);
      res.status(500).send('An error ocurred in the server.');
  }
});

// post data to user calendar for the day
router.post('/', async (req, res) => {
  const information = req.body;
  const savedInfo = await calendarServices.addInfoToCalendar(information);
  if (savedInfo)
      res.status(201).send('Successfully updated calendar!');
  else
      res.status(500).end();
});

module.exports = router;
