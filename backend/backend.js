const express = require('express');
const cors = require('cors');

const database = require('./database'); // sets up database connection and env defines
const adviceServices = require('./models/health_advice/advice-services');
const nutritionServices = require('./models/nutrition/nutrition-services');
const workoutServices= require('./models/weights_log/weights_log');
const goalsServices = require('./models/goals/goals-services');
const { User } = require('./models/user/user')

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

app.get('/weights', async (req, res) => {
    const username = req.query.username;
    const name = req.query.name;
    const type = req.query.type;
    try {
        const result = await workoutServices.getUserWorkouts(username, name, type);
        if (result)
          res.send(result); // 201 ok response
        else
          res.status(204).send('User not found');
    } catch (error) {
        console.log(error);
        res.status(500).send('An error ocurred in the server.');
    }
  });
  
  app.post('/weights', async (req, res) => {
    const data = req.body;
    const savedInfo = await workoutServices.addUserWorkout(data);
    if (savedInfo)
        res.status(201).send('Successfully added Workout! :)');
    else
        res.status(500).end();
  });

// gets list of goals
app.get('/goals', async (req, res) => {
    try {
        const result = await goalsServices.getGoalList();
        res.send(result);      
    } catch (error) {
        console.log(error);
        res.status(500).send('An error ocurred in the server.');
    }
});

// function to calculate age
function getAge(dateString) {
    var ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds/1000/60/60/24/365);
}

app.get('/goals/calories', async (req, res) => {
    try {
        const user = await User.findOne({username: req.query.username});
        const goalList = await goalsServices.getGoalList();

        const matchedGoal = goalList.find(element => element.goal === user.goal);
        const multiplier = matchedGoal.calorie_multiplier;
        const age = getAge(user.birthday)

        var baseCalories = 10 * 0.453592 * user.weight + 6.25 * 2.54 * user.height - 5 * age
        if (user.gender === "Male") {
            baseCalories += 5;
        }
        else {
            baseCalories -= 161;
        }

        baseCalories = Math.floor(baseCalories * multiplier);
        res.send({targetCalories: baseCalories});
    } catch (error) {
        console.log(error);
        res.status(500).send('An error occured in the server.');
    }
});

app.get('/goals/nutrition', async (req, res) => {
    try {
        const user = await User.findOne({username: req.query.username});
        const goalList = await goalsServices.getGoalList();

        const matchedGoal = goalList.find(element => element.goal === user.goal);
        const multiplier = matchedGoal.calorie_multiplier;
        const age = getAge(user.birthday)

        var baseCalories = 10 * 0.453592 * user.weight + 6.25 * 2.54 * user.height - 5 * age
        if (user.gender === "Male") {
            baseCalories += 5;
        }
        else {
            baseCalories -= 161;
        }

        baseCalories = Math.floor(baseCalories * multiplier);
        
        const protein = Math.floor(baseCalories / 1000 * 45);
        const carbs = Math.floor(baseCalories / 1000 * 128);
        const fats = Math.floor(baseCalories / 1000 * 37);
        
        res.send({
            targetProtein: protein,
            targetCarbs: carbs,
            targetFats: fats
        });
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
});


// get daily nutrition table chart
app.get('/nutrition', async (req, res) => {
    try {
        const username = req.query.username;
        var user = await nutritionServices.getUserNutrtition(username);
        
        while (!user) {
            await nutritionServices.createUserNutrition(username);
            user = await nutritionServices.getUserNutrtition(username);
        }
        
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
        const username = req.query.username;
        const food = req.body.food;
        const quantity = Number(req.body.quantity);
        const currentDay = req.body.day;
        const currentMonth = req.body.month;
        const currentYear = req.body.year;

        if (quantity > 0) {
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

            for (const nutritionEntry of user.nutritionStats) {
              if (nutritionEntry.date === currentDay 
              && nutritionEntry.month === currentMonth
              && nutritionEntry.year === currentYear)
              {
                nutritionEntry.calories += calories;
                nutritionEntry.protein += protein;
                nutritionEntry.carbs += carbs;
                nutritionEntry.fats += fats;
              }
            }

            await nutritionServices.updateUserNutrition(user);
            res.send("Success");
        } else {
            res.status(500).send("Quantity must be a number greater than 0");
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('An error occured in the server');
    }
})
// Middlewares
const bodyParser = require('body-parser'),
      flash = require('connect-flash'),
      passportControl = require('./lib/passport-control');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passportControl.initialize());

// Routers
// example 'localhost:5000/passport/{router js defines}'
app.use('/passport', require('./routes/passportAPI'));
app.use('/calendar', require('./routes/calendarAPI'));

var server = app.listen(port, function () {
    let servhost = server.address().address
    let servport = server.address().port

    console.log("gitfit app listening at http://%s:%s", servhost, servport)
});