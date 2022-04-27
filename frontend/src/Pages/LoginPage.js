import React from 'react';
import {Link} from 'react-router-dom';

function LoginPage()
{
  // we probably want to redirect logged in users to summary page
  // leave summary link in for now
  return (
    <div>
      <h3>GitFit: Login</h3>
      <Link to="/summary">Summary Link for Dev Purposes</Link>
    </div>
  );
}

export default LoginPage;
