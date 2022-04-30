/* eslint-disable import/no-named-as-default */
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import SummaryPage from './Pages/SummaryPage';
import CalendarPage from './Pages/CalendarPage';
import WeightsPage from './Pages/WeightsPage';
import BMIPage from './Pages/BMIPage';
import AboutPage from './Pages/AboutPage';
import ErrorPage from './Pages/ErrorPage';
import NutritionPage from './Pages/NutritionPage';

function App() {
  // note that the Route changes what's being rendered, it doesn't actually load a new page
  // we might want to have a folder with all of the pages inside
  return (
    <div className="App">
      <div style={{ width: '100%' }}>
        <Routes>
          <Route path="/" exact element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/weights" element={<WeightsPage />} />
          <Route path='/nutrition' element={<NutritionPage />} />
          <Route path="/bmi" element={<BMIPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </div>
      <a href="/#">
        <Link to="/about" title="Summary">
            About GitFit
        </Link>
      </a>
      <a
        className="App-link"
        href="https://github.com/LukeSandsor/GitFit-App"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to GitHub Repo
      </a>
    </div>
  );
}

export default App;
