import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/LoginPage';
import SummaryPage from './Pages/SummaryPage';
import CalendarPage from './Pages/CalendarPage';
import WeightsPage from './Pages/WeightsPage';
import {Route, Routes} from 'react-router-dom';

function App() {

  // note that the Route changes what's being rendered, it doesn't actually load a new page
  // we might want to have a folder with all of the pages inside
  return (
    <div className="App">
      <header className="App-header">
        <div id="This is the routes set up div">
          <Routes>
            <Route path="/" exact element={<HomePage />}/>
            <Route path="/login" exact element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/weights" element={<WeightsPage />} />
          </Routes>
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
