import React from 'react';
import { Link } from 'react-router-dom';
import gitfitlogo from '../images/GitFitLogo.svg';

function LoginPage() {
  // we probably want to redirect logged in users to summary page
  // leave summary link in for now
  return (
    <div>
      <div className='GitFit logo'><img src={gitfitlogo} alt="GitFit Logo" sytle={{ verticalAlign: 'top', width: 700, height: 250 }}></img></div>
      <Link to="/summary">Summary Link for Dev Purposes</Link>
    </div>
  );
}

export default LoginPage;
