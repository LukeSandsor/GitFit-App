import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import './SummaryPage.css';

const monthStrs = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const emojis = ['😡', '😢', '🤒', '😐', '🙂', '🤩'];

const user = 'guest';

function SummaryPage() {
  const [adviceObject, setAdvice] = useState({});
  const [selectedEmoji, setSelectedEmoji] = useState("");

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
      <h3 id='date-block'>{`${monthStrs[(new Date()).getMonth()]} ${(new Date()).getDate()}, ${(new Date()).getFullYear()}`}</h3>
      <div id="mood-picker">
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
