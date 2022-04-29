import React from 'react';
import {Link} from 'react-router-dom';

// Vertical NavBar, create CSS for it
// This will be an object that provides links to all of the other user pages
function NavBar()
{
  return (
    <div>
      <ul>
        <li><Link to="/summary">Summary</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/weights">Weight</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;