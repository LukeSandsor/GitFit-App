import React from 'react';
import logo from '../dumbell.svg';
import {Link} from 'react-router-dom';

function HomePage()
{

  return (
    <div>
      <h3>GitFit: Home</h3>
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </div>
    </div>
  );
}

export default HomePage;
