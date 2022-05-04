import React from 'react';
import {Link} from 'react-router-dom';
import gitfitlogo from '../images/GitFitLogo.svg';
import './RegisterPage.css';

function RegisterPage()
{

  return (
    <div>
      <div className='GitFit logo'><img src={gitfitlogo} alt="GitFit Logo" sytle={{verticalAlign: 'top', width: 700, height: 250}}></img></div>
      <div style={{display: 'inline-block', backgroundColor: 'lightblue', borderRadius: 10, height: 500, maxHeight: '50%', width: 1000, maxWidth: '80%'}}>
        <h5 style={{color: 'blue', textAlign: 'left', fontSize: 24, marginBottom: 10, marginTop: 5, marginLeft: 10}}>Start for free</h5>
        <h2 style={{color: 'grey', textAlign: 'left', fontSize: 56, marginTop: 10, marginLeft: 9}}>Create New Account</h2>
        <text style={{marginBottom: 15, backgroundColor: 'white', color: 'grey', borderRadius: 5}}>React?! I barely knew her</text>
      </div>
      <div style={{display: 'inline-block'}}>
      </div>
      <br/>
      <div style={{alignContent: 'center', margin: 10}}>
          <button class="btn" style={{width: '35%', maxWidth: 500}}>Register</button>
      </div>
      <Link to="/summary">Summary Link for Dev Purposes</Link>
    </div>
  );
}

export default RegisterPage;
