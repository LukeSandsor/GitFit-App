const express = require('express');
const cors = require('cors');

const adviceServices = require('./models/health_advice/advice-services');
const calendarServices = require('./models/calendar/calendar-service');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Gitfit App Backend!');
});

app.get('/advice', async (req, res) => {
    try {
        const result = await adviceServices.getAdvice();
        res.send(result);      
    } catch (error) {
        console.log(error);
        res.status(500).send('An error ocurred in the server.');
    }
});

app.get('/calendar', async (req, res) => {
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
app.post('/calendar', async (req, res) => {
  const information = req.body;
  const savedInfo = await calendarServices.addInfoToCalendar(information);
  if (savedInfo)
      res.status(201).send('Successfully updated calendar!');
  else
      res.status(500).end();
});

var server = app.listen(port, function () {
    let servhost = server.address().address
    let servport = server.address().port

    console.log("gitfit app listening at http://%s:%s", servhost, servport)
});
