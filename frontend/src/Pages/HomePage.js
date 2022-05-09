import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../dumbell.svg';
import gitfitlogo from '../images/GitFitLogo.svg';

function HomePage() {
  return (
    <div>
      <div className='GitFit logo'><img src={gitfitlogo} alt="GitFit Logo" sytle={{ verticalAlign: 'top', width: 700, height: 250 }}></img></div>
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </div>
    </div>
  );
}

export default HomePage;
