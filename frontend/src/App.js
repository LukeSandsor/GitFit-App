import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import PrivateRouteWrapper from './lib/PrivateRoute';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import SummaryPage from './Pages/SummaryPage';
import CalendarPage from './Pages/CalendarPage';
import WeightsPage from './Pages/WeightsPage';
import NutritionPage from './Pages/NutritionPage';
import BMIPage from './Pages/BMIPage';
import AboutPage from './Pages/AboutPage';
import Logout from './component/Logout';
import ErrorPage from './Pages/ErrorPage';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    
  }, []);

  // note that the Route changes what's being rendered, it doesn't actually load a new page
  // we might want to have a folder with all of the pages inside
  
  // some routes are public, non-logged in users can use them
  return (
    <div className='App'>
      <div style={{ width: '100%' }}>
        <Routes>
          <Route path='/' exact element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />} />
          
          <Route path='/summary' element={<PrivateRouteWrapper />}>
            <Route path='/summary' element={<SummaryPage />} />
          </Route>
          <Route path='/calendar' element={<PrivateRouteWrapper />}>
            <Route path='/calendar' element={<CalendarPage />} />
          </Route>
          <Route path='/weights' element={<PrivateRouteWrapper />}>
            <Route path='/weights' element={<WeightsPage />} />
          </Route>
          <Route path='/nutrition' element={<PrivateRouteWrapper />}>
            <Route path='/nutrition' element={<NutritionPage />} />
          </Route>
          <Route path='/bmi' element={<PrivateRouteWrapper />}>
            <Route path='/bmi' element={<BMIPage />} />
          </Route>
          <Route path='/about' element={<PrivateRouteWrapper />}>
            <Route path='/about' element={<AboutPage />} />
          </Route>

          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
