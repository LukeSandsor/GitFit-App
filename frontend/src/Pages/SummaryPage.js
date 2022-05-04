import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import './SummaryPage.css'

function SummaryPage()
{
  const [adviceObject, setAdvice] = useState({});

  useEffect(() => {
    getAdvice().then( result => {
      if (result)
        setAdvice(result);
      });
  }, []); // only load on render

  async function getAdvice() {
    try {
      // returns an array of size 1 with advice object
      const response = await axios.get('https://gitfit.lucasreyna.me/advice');
      return response.data[0];     
    }
    catch (error){
      // possible do something with no advice
      console.log(error);
      return false;
    }
  }

  return (
    <div className="user-page">
      <NavBar/>
      <h3>GitFit: Summary</h3>
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
              <span>"{adviceObject.advice}"</span>
            </div>
      </div>
    </div>
  );
}

export default SummaryPage;