import React, {useState, useEffect} from 'react';
import logo from './dumbell.svg';
import axios from 'axios';
import './App.css';

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
      const response = await axios.get('http://gitfit.lucasreyna.me:3032/advice');
      return response.data[0];     
   }
   catch (error){
      // possible do something with no advice
      console.log(error);
      return false;
   }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Changing some stuff on the frontend -- Lucas
        </p>
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
