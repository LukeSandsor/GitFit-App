import React from 'react';
import {Link} from 'react-router-dom';

function WeightPage()
{
  // we probably want to redirect logged in users to summary page
  // leave summary link in for now
  return (
    <div>
      <h1>Weight Training</h1>
      <TextField
          id="first-name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
/>
      <Link to="/summary">Summary Link for Dev Purposes</Link>
    </div>
  );
}

