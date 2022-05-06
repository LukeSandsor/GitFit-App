import React from 'react';
import { Link } from 'react-router-dom';

// this page should show up if there is something wrong with url
function ErrorPage() {
  return (
    <div>
      <h3>GitFit: ErrorPage</h3>
      <Link to="/" title="Home Page">Link to go back to HomePage</Link>
    </div>
  );
}

export default ErrorPage;
