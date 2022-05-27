import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import './SummaryPage.css';

const monthStrs = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const emojis = ['😡', '😢', '🤒', '😐', '🙂', '🤩'];

const user = 'guest';

const maxSteps = 200000;

function SummaryPage() {
  const [adviceObject, setAdvice] = useState({});
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [currentSteps, setCurrentSteps] = useState(0);
  const [errorMessage, setErrorMessage] = useState({});

  const todayDateObject = new Date();
  const currentYear = todayDateObject.getFullYear();
  const currentMonth = todayDateObject.getMonth();
  const currentDay = todayDateObject.getDate();

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

  async function postEmoji() {
    try {
      if (selectedEmoji !== '') {
        const emojiStr = document.getElementById(selectedEmoji).innerHTML;
        const response = await axios.post(
          'https://gitfit.lucasreyna.me/calendar', 
          {user: user, 'mood': emojiStr}
        );
        return response;
      }
    } catch (error) {
      // possibly do something with error
      return false;
    }
  }

  const renderErrorMessage = (val) =>
    val === errorMessage.type && (<span class="dailydose-error">{errorMessage.message}</span>);

  async function postStep() {
    try {
      const stepValue = document.getElementById('step-input').valueAsNumber;

      // filter out non number values
      if (isNaN(stepValue)) {
        setErrorMessage({type: 'step-input', message: "Step Input must be a number!"});
        return false;
      }

      if (stepValue > maxSteps) {
        setErrorMessage({type: 'step-input', message: "No shot you took this many steps!"});
        return false;
      }

      // send a post request to backend
      setErrorMessage( {} ); // remove error message
      const response = await axios.post(
        'https://gitfit.lucasreyna.me/calendar', 
        {user: user, 'numStep': stepValue}
      );
      
      // check the backend response
      if (response.status === 201) {
        setCurrentSteps(stepValue);
      }
      else {
        setErrorMessage({type: 'step-input', message: "Error uploading step data!"});
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

  useEffect(() => {
    getAdvice().then((result) => {
      if (result) {
        setAdvice(result);
      }
    });

    getCalendarFromUser(user).then((result) => {
      // make sure result is defined
      if (result === null) return;
      result = result.years;
      if (result[currentYear] === null) return;
      if (result[currentYear][currentMonth] === null) return;
      
      const todayData = result[currentYear][currentMonth][currentDay];
      if (todayData === null) return;

      // after checking for valid data, set states if possible
      if (todayData['mood']) {
        const index = emojis.findIndex((val) => val === todayData['mood']);
        if (index > 0 && index < emojis.length)
          setSelectedEmoji(emojiID(index));
      }

      if (todayData['numStep'])
        setCurrentSteps(todayData['numStep']);
    })
  }, []); // only load on first render

  useEffect(() => {
    if (selectedEmoji !== '') {
      changeEmojiClass('selected');
    }
  }, [selectedEmoji]);

  return (
    <div id="summary-page" className="user-page">
      <NavBar/>
      <h1>Daily Dose</h1>
      <h3 id='date-block'>{`${monthStrs[currentMonth]} ${currentDay}, ${currentYear}`}</h3>

      <div className="user-block" id="mood-picker">
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

      <div className="user-block" id="step-submit">
        <h3>👟👟 Today's Recorded Steps: {currentSteps}</h3>
        <p>Enter the amount of steps taken today</p>
        <input type="number" id="step-input" name="steps" min="0" required/>
        <button onClick={() => postStep()}>Submit</button> <br />
        {renderErrorMessage('step-input')}
      </div>
      
      <div id="adviceDisplay">
            <a href={adviceObject.source}>{adviceObject.source}</a>
            <div id="advice-text-block">
              <span>&#34;{adviceObject.advice}&#34;</span>
            </div>
      </div>
    </div>
  );
}

export default SummaryPage;
