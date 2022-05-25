const express = require('express');
const cors = require('cors');

const adviceServices = require('./models/health_advice/advice-services');
const calendarServices = require('./models/calendar/calendar-service');
const nutritionServices = require('./models/nutrition/nutrition-services');
const weight_history = require('./models/weights_log/weights_log');
const userServices = require('./models/user/user-services');
const nutrition = require('./models/nutrition/nutrition');
const { type } = require('express/lib/response');

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


// get nutrition table chart
app.get('/nutrition/table', async (req, res) => {
    try {
        const result = await nutritionServices.getFoodList();
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send('An error occured in the server.');
    }
});

app.get('/weights/:name', async (req, res) => {
    const name = req.params.name;
    const result = await weights_history.getWorkoutByName(name);
    if (result === null || result === undefined)
         res.status(404).send('Resource not found.');
    else {
        res.status(201).send({weights_hisotry: result});
    }
});

app.get('weights/:date', async (req, res) => {
    const date = req.params.date
    const result = await weights_history.getWorkoutByDate(date);
    if (result === null || result === undefined)
        res.status(404).send('Resource not found.');
    else {
        res.status(201).send({weights_hisotry: result})
    }
})

// get user info
/*app.get('/user', async (req, res) => {
    try {
        const result = await userServices.getUser();
        res.send(result);      
    } catch (error) {
        console.log(error);
        res.status(500).send('An error ocurred in the server.');
    }
});*/

// get daily nutrition table chart
app.get('/nutrition', async (req, res) => {
    try {
        const username = req.query.username;
        const user = await nutritionServices.getUserNutrtition(username);
        today = new Date();


        entry = user.nutritionStats.filter(stats => {
            return (
                stats.date === today.getDate() 
                && stats.month === today.getMonth()
                && stats.year === today.getFullYear()
            )
        })
        if (entry.length === 0) {
            const newEntry = {
                date: today.getDate(),
                month: today.getMonth(),
                year: today.getFullYear(),
                protein: 0,
                carbs: 0,
                fats: 0,
                calories: 0
            }
            user.nutritionStats.push(newEntry);
            await nutritionServices.updateUserNutrition(user);
            return res.send(newEntry);
        }
        else {
            return res.send(entry[0]);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('An error occured in the server');
    }
});
app.put('/nutrition', async (req, res) => {
    try {
        console.log(req.body);
        const username = req.query.username;
        const food = req.body.food;
        const quantity = req.body.quantity;

        if (typeof quantity === 'number' && quantity > 0) {
            var ratio = 0;
            var calories = 0;
            var protein = 0;
            var carbs = 0;
            var fats = 0;

            const user = await nutritionServices.getUserNutrtition(username);
            const nutritionTable = await nutritionServices.getFoodList();

            for (const foodEntry of nutritionTable) {
                if (foodEntry.food === food) {
                    ratio = Math.round(quantity / foodEntry.average_portion * 100) / 100;
                    calories = Math.round(ratio * foodEntry.calories * 100) / 100;
                    protein = Math.round(ratio * foodEntry.protein * 100) / 100;
                    carbs = Math.round(ratio * foodEntry.carbs * 100) / 100;
                    fats = Math.round(ratio * foodEntry.fats * 100) / 100;
                    break;
                }
            }
            console.log(ratio, calories, protein, carbs, fats);

            today = new Date();
            for (const nutritionEntry of user.nutritionStats) {
                if (nutritionEntry.date === today.getDate() 
                && nutritionEntry.month === today.getMonth()
                && nutritionEntry.year === today.getFullYear())
                {
                    nutritionEntry.calories += calories;
                    nutritionEntry.protein += protein;
                    nutritionEntry.carbs += carbs;
                    nutritionEntry.fats += fats;
                }
            }

            console.log(user.nutritionStats);
            await nutritionServices.updateUserNutrition(user);
            res.send("Success");
        } else {
            res.status(500).send("Quantity must be a number greater than 0");
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('An error occured in the server');
    }
});

// Middlewares
const bodyParser = require('body-parser'),
      flash = require('connect-flash'),
      passportControl = require('./lib/passport-control')

app.use(bodyParser.urlencoded({ extended: false }));
//const path = require('path');
//app.use(express.static(path.join(__dirname, 'public')));
app.use(passportControl.initialize());

// Routers
// example 'localhost:5000/passport/{router js defines}'
app.use('/passport', require('./routes/passportAPI'));

var server = app.listen(port, function () {
    let servhost = server.address().address
    let servport = server.address().port

    console.log("gitfit app listening at http://%s:%s", servhost, servport)
});
