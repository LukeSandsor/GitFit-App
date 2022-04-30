import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import homeIcon from './images/home_icon.svg';
import calendarIcon from './images/calendar_icon.svg';
import weightIcon from './images/dumbbell.png';
import nutritionIcon from './images/nutrition.png'

// Vertical NavBar, create CSS for it
// This will be an object that provides links to all of the other user pages
function NavBar()
{
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to="/summary">
            <img src={homeIcon} className="navbar-icon" alt="Home" />
          </Link>
        </li>
        <li>
          <Link to="/calendar">
            <img src={calendarIcon} className="navbar-icon" alt="Calendar" />
          </Link>
        </li>
        <li>
          <Link to="/weights">
            <img src={weightIcon} className="navbar-icon" alt="Weight" />
          </Link>
        </li>
        <li>
          <Link to='/nutrition'>
            <img src={nutritionIcon} className="navbar-icon" alt="Nutrition"/>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;