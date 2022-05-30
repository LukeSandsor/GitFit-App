import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import './SummaryPage.css';
import dumbbell from '../dumbell.svg';
import Select from 'react-dropdown-select';
import { useParams } from 'react-router-dom';

const monthStrs = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const emojis = ['😡', '😢', '🤒', '😐', '🙂', '🤩'];
const maxSteps = 200000;

function SummaryPage() {
  const [adviceObject, setAdvice] = useState({});
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [currentSteps, setCurrentSteps] = useState(0);
  const [currentWeight, setCurrentWeight] = useState(0);
  const [currentUser, setCurrentUser] = useState('');
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // nutrition goals
  const [goalList, setGoalList] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState('');
  const [currentGoal, setCurrentGoal] = useState('');

  // calories
  const [currentCalories, setCurrentCalories] = useState(0);
  const [targetCalories, setTargetCalories] = useState(0);

  const todayDateObject = new Date();
  const currentYear = todayDateObject.getFullYear();
  const currentMonth = todayDateObject.getMonth();
  const currentDay = todayDateObject.getDate();

  function getDateAsObject()
  {
    return {
      year: currentYear,
      month: currentMonth,
      day: currentDay
    };
  }

  const renderErrorMessage = (val) =>
    val === errorMessage.type && (<span className={`dailydose-error ${errorMessage.extraClass}`}>{errorMessage.message}</span>);

  // warning is not dynamic
  // only runs on re-render, consider changing this
  function adviceBlockHeight()
  {
    const blockElement = document.getElementById('adviceDisplay');
    if (blockElement != null)
      return blockElement.getBoundingClientRect().height;
  }

  async function getAdvice() {
    try {
      // returns an array of size 1 with advice object
      const response = await axios.get('https://gitfit.lucasreyna.me/advice');
      return response.data[0];
    } catch (error) {
      // possibly do something with no advice
      // console.log(error);
      return false;
    }
  }

  async function getCalendarFromUser(username) {
    try {
      // cache this stuff later, don't need to get the whole calendar every time
      const response = await axios.get(`https://gitfit.lucasreyna.me/calendar?user=${username}`);

      if (response.status === 200) {
        return response.data;
      }
      // else handle user not being in the calendar db
      // most likely a 204 response
      return { years: {} };
    } catch (error) {
      // possible do something with no advice
      // console.log(error);
      return false;
    }
  }

  async function getWeightFromUser() {
    try {
      const response = await axios.get('https://gitfit.lucasreyna.me/passport/user', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
      if (response.status === 200) {
        return response.data.weight;
      }
    } catch (error) {
      // console.log(error);
      return false;
    }
  }

  async function postEmoji() {
    try {
      if (selectedEmoji !== '') {
        const emojiStr = document.getElementById(selectedEmoji).innerHTML;
        const response = await axios.post(
          'https://gitfit.lucasreyna.me/calendar', 
          {...getDateAsObject(), user: currentUser, mood: emojiStr}
        );
        return response;
      }
    } catch (error) {
      // possibly do something with error
      return false;
    }
  }

  async function updateUserWeight() {
    try {
      const weightValue = document.getElementById('weight-input').valueAsNumber;

      // filter out non number values
      if (isNaN(weightValue)) {
        setErrorMessage({type: 'weight-input', message: 'Weight Input must be a number!'});
        return false;
      }

      if (weightValue < 0) {
        setErrorMessage({type: 'weight-input', message: 'Weight Input must be at least 0'});
        return false;
      }

      if (weightValue > maxSteps) {
        setErrorMessage({type: 'weight-input', message: 'No shot you weigh this much bruh'});
        return false;
      }

      // send a post request to backend
      setErrorMessage( {} ); // remove error message

      const params = {username: localStorage.getItem('username'), weight: weightValue};
      await axios.put('https://gitfit.lucasreyna.me/passport/user', {
        body: 
          params
        }
      ).then( async (res) => {
        // verify that user was actually deleted
        if (res.status === 200) {
          
        }
        await postWeight(weightValue);
      }).catch(() => {
        setErrorMessage({type: 'height-submit', message: 'Error uploading weight data!'});
        return;
      });
    }
    catch (error) {
      // possibly do something with error
      return false;
    }
  }

  async function postWeight(weightValue) {
    const response = await axios.post(
      'https://gitfit.lucasreyna.me/calendar', 
      {...getDateAsObject(), user: currentUser, weight: weightValue}
    );
    
    // check the backend response for updating calendar
    if (response.status === 201) {
      setCurrentWeight(weightValue);
      setErrorMessage({type: 'weight-input', extraClass:'posted', message: response.data});
    }
    else {
      setErrorMessage({type: 'weight-input', message: 'Error uploading step data!'});
    }
  }

  async function postStep() {
    try {
      const stepValue = document.getElementById('step-input').valueAsNumber;

      // filter out non number values
      if (isNaN(stepValue)) {
        setErrorMessage({type: 'step-input', message: 'Step Input must be a number!'});
        return false;
      }

      if (stepValue < 0) {
        setErrorMessage({type: 'step-input', message: 'Step Input must be at least 0'});
        return false;
      }

      if (stepValue > maxSteps) {
        setErrorMessage({type: 'step-input', message: 'No shot you took this many steps!'});
        return false;
      }

      // send a post request to backend
      setErrorMessage( {} ); // remove error message
      const response = await axios.post(
        'https://gitfit.lucasreyna.me/calendar', 
        {...getDateAsObject(), user: currentUser, numStep: stepValue}
      );
      
      // check the backend response
      if (response.status === 201) {
        setCurrentSteps(stepValue);
      }
      else {
        setErrorMessage({type: 'step-input', message: 'Error uploading step data!'});
      }
    }
    catch (error) {
      // possibly do something with error
      return false;
    }
  }

  function emojiID(index)
  {
    return `Emoji-${index}`;
  }

  function changeEmojiClass(className)
  {
    // grab the emoji html object by id
    let emojiHTML = document.getElementById(selectedEmoji);
    
    // change the class name of the emoji object
    // make sure the element does exist
    if (emojiHTML) {
      emojiHTML.className = `emoji ${className}`;
    }
  }

  function selectEmoji(emojiIndex)
  {
    let thisEmojiID = emojiID(emojiIndex);

    // reset old selected emoji
    // don't bother reseting if it's the same one
    if (selectedEmoji !== thisEmojiID)
    {
      changeEmojiClass('');
      setSelectedEmoji(thisEmojiID);
    }
  }

  // only run on first render
  useEffect(() => {
    getAdvice().then((result) => {
      if (result) {
        setAdvice(result);
      }
    });

    setCurrentUser(localStorage.getItem('username'));
  }, []);

  // if the user changes, load new calendar info
  useEffect(() => {
    if (currentUser === '') // ignore empty user
      return;

    getCalendarFromUser(currentUser).then((result) => {
      // make sure result is defined
      if (result === undefined) return;
      result = result.years;
      if (result[currentYear] === undefined) return;
      if (result[currentYear][currentMonth] === undefined) return;

      const todayData = result[currentYear][currentMonth][currentDay];
      if (todayData === undefined) return;

      // after checking for valid data, set states if possible
      if (todayData['mood']) {
        const index = emojis.findIndex((val) => val === todayData['mood']);
        if (index > 0 && index < emojis.length)
          setSelectedEmoji(emojiID(index));
      }

      if (todayData['numStep'])
        setCurrentSteps(todayData['numStep']);
    });

    getWeightFromUser().then((weight) => {
      postWeight(weight); // post to calendar and screen
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
    });
  }, [currentUser]);

  // deselects old emoji when submitting a new one
  useEffect(() => {
    if (selectedEmoji !== '') {
      changeEmojiClass('selected');
    }
  
  }, [selectedEmoji]);

  async function getGoalList() {
    try {
      const response = await axios.get('https://gitfit.lucasreyna.me/goals');
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    getGoalList().then(result => {
      if (result)
        setGoalList(result.map((item) => {
          return (
            {
              label: item.goal,
              value: item
            }
          )
        }))
    });
  });

  async function getUserCalories() {

  }

  async function getUserCurrentGoal() {
    try {
      const response = await axios.get('https://gitfit.lucasreyna.me/passport/user', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
      if (response.status === 200) {
        return response.data.goal;
      }
    } catch (error) {
      // console.log(error);
      return false;
    }
  }

  useEffect(() => {
    getUserCurrentGoal().then(result => {
      if (result)
        setCurrentGoal(result)
    });
  });

  async function updateUserGoal() {
    if (selectedGoal !== '') {
      try {
        const params = {username: localStorage.getItem('username'), goal: selectedGoal};
        await axios.put('https://gitfit.lucasreyna.me/passport/user', {
          body: params
        })
      } catch (error) {
        return false
      }
    }
  }

  async function getUserCalories() {
    try {
      const response = await axios.get(`https://gitfit.lucasreyna.me/nutrition?username=${currentUser}`);
      return response.data.calories;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    getUserCalories().then(result => {
      if (result)
        setCurrentCalories(result)
    });
  });

  async function getTargetCalories() {
    try {
      const response = await axios.get(`https://gitfit.lucasreyna.me/goals/calories?username=${currentUser}`);
      return response.data.targetCalories;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    getTargetCalories().then(result => {
      if (result)
        setTargetCalories(result)
    });
  });

  function renderPage()
  {
    return (
      <div id='summary-page' className='user-page'>
        <NavBar/>
        <h1>Daily Dose</h1>
        <h3 id='name-block'>{`Hello, ${currentUser}`}</h3>
        <h3 id='date-block'>{`${monthStrs[currentMonth]} ${currentDay}, ${currentYear}`}</h3>

        <div className='user-block' id='mood-picker'>
          <p>Pick a mood that describes your day:</p>
          <ul>
            {emojis.map((item, index) => 
              <li className='emoji' key={index}>
                <span id={emojiID(index)} onClick={() => selectEmoji(index)}>{item}</span>
              </li>
            )}
          </ul>
          <button onClick={() => postEmoji()}>Submit</button>
        </div>

        <div className='user-block' id='step-submit'>
          <h3>👟👟 Today's Recorded Steps: {currentSteps}</h3>
          <p>Enter the amount of steps taken today</p>
          <input type='number' id='step-input' name='steps' min='0' required/>
          <button onClick={() => postStep()}>Submit</button> <br />
          {renderErrorMessage('step-input')}
        </div>

        <div className='user-block' id='weight-submit'>
          <h3>Current Weight: {currentWeight} lbs</h3>
          <p>Enter new weight</p>
          <input type='number' id='weight-input' name='weight' min='0' required/>
          <button onClick={() => updateUserWeight()}>Submit</button> <br />
          {renderErrorMessage('weight-input')}
        </div>

        <div className='user-block' id='goal-submit'>
          <h3>Current Goal: {currentGoal}</h3>
          <p>Enter new goal</p>
          <div className='food-selecter'>
            <Select
              options={goalList}
              placeholder='Select New Goal'
              searchable={true}
              closeOnSelect={true}
              onChange={(e) => {
                setSelectedGoal(e[0].label)
              }}
            />
          </div>
          <button onClick={() => updateUserGoal()}>Submit</button> <br />
          {renderErrorMessage('goal-input')}
        </div>

        <div className='user-block' id='calorie-counter'>
          <h3>Calorie Counter</h3>
          <p>Target Calories: {targetCalories}</p>
          <p>Current Calories: {currentCalories}</p>
          {renderErrorMessage('goal-input')}
        </div>
        
        <div id='adviceDisplay'>
              <a href={adviceObject.source}>{adviceObject.source}</a>
              <div id='advice-text-block'>
                <span>&#34;{adviceObject.advice}&#34;</span>
              </div>
        </div>

        <div id='margin-block' style={{height: adviceBlockHeight()}}></div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <span>
        {renderPage()}
        <div id='loading-screen'>
          <h1>Loading...</h1>
          <img src={dumbbell} className="App-logo" alt="dumbell" />
        </div>
      </span>
    );
  }
  else {
    return (
      renderPage()
    );
  }
}

export default SummaryPage;
