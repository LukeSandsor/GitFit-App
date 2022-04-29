import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import homeIcon from './images/home_icon.svg';
import calendarIcon from './images/calendar_icon.svg';
import weightIcon from './images/dumbbell.png';

/* Vertical NavBar using fixed positioning in CSS
  This will be an object that provides links to all of the other user pages
  
  Navbar should be a list of nested links
  The title attribute of links shows text when you hover over it
*/
function NavBar()
{
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to="/summary" title="Summary">
            <img src={homeIcon} className="navbar-icon" alt="Home" />
          </Link>
        </li>
        <li>
          <Link to="/calendar" title="Calendar">
            <img src={calendarIcon} className="navbar-icon" alt="Calendar" />
          </Link>
        </li>
        <li>
          <Link to="/weights" title="Weight Training">
            <img src={weightIcon} className="navbar-icon" alt="Weight" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;