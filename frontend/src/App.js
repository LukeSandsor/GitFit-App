import React, {useState, useEffect} from 'react';
import logo from './dumbell.svg';
import axios from 'axios';
import './App.css';
import CalendarPage from './CalendarPage';
import {Route, Routes, Link} from 'react-router-dom';

function App() {
  const [adviceObject, setAdvice] = useState({});

  useEffect(() => {
    getAdvice().then( result => {
        if (result)
          setAdvice(result);
        });
}, [] ); // only load on render

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

  // note that the Route changes what's being rendered, it doesn't actually load a new page
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="this is the link list div, this will be turned into the nav bar later">
          <ul>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>
        </div>
        <div id="This is the routes set up div">
          Pseudo Side Bar Look at HTML for example
          <Routes>
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </div>
        <div id="adviceDisplay" style={{"backgroundColor": "darkgray", "borderRadius": 15}}>
          <p>"{adviceObject.advice}" -</p>
          <a href={adviceObject.source}>{adviceObject.source}</a>
        </div>
        <a
          className="App-link"
          href="https://github.com/LukeSandsor/GitFit-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to GitHub Repo
        </a>
      </header>
    </div>
  );
}

export default App;
