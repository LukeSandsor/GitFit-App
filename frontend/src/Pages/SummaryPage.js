import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import './SummaryPage.css';

const monthStrs = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function SummaryPage() {
  const [adviceObject, setAdvice] = useState({});

  async function getAdvice() {
    try {
      // returns an array of size 1 with advice object
      const response = await axios.get('https://gitfit.lucasreyna.me/advice');
      return response.data[0];
    } catch (error) {
      // possible do something with no advice
      // console.log(error);
      return false;
    }
  }

  useEffect(() => {
    getAdvice().then((result) => {
      if (result) {
        setAdvice(result);
      }
    });
  }, []); // only load on render

  return (
    <div id="summary-page" className="user-page">
      <NavBar/>
      <h1>Summary</h1>
      <h3 id='date-block'>{`${monthStrs[(new Date()).getMonth()]} ${(new Date()).getDate()}, ${(new Date()).getFullYear()}`}</h3>
      <div id="mood-picker">
        <p>Pick a mood that describes your day:</p>
        <ul>
          <li><span role="img" aria-label="Angry">😡</span></li>
          <li><span role="img" aria-label="Cry">😢</span></li>
          <li><span role="img" aria-label="Sick">🤒</span></li>
          <li><span role="img" aria-label="Neutral">😐</span></li>
          <li><span role="img" aria-label="Happy">🙂</span></li>
          <li><span role="img" aria-label="Ecstatic">🤩</span></li>
        </ul>
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
