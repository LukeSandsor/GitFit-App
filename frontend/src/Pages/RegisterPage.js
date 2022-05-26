import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';
import gitfitlogo from '../images/GitFitLogo.svg';
import GenderSelect from '../GenderSelect';
import isAuthenticated from '../lib/isAuthenticated';

import './RegisterPage.css';

function RegisterPage() {
   const genderOptions = [
        {
            label: 'Male',
            value: 'm'
        },
        {
          label: 'Female',
          value: 'f'
        },
        {
          label: 'Other',
          value: 'o'
        }
      ]

  const [errorMessage, setErrorMessage] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/login';
    navigate(path);
  }

  const renderErrorMessage = (val) =>
    val === errorMessage.type && (<span class='register-error'>{errorMessage.message}</span>);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    let form = event.target;
    let formData = new FormData(form);
    let params = new URLSearchParams(formData);

    // debug form parameters
    params.forEach((v, k) => {console.log(`${k}: ${v}`);});

    // verify that passwords match
    if (params.get('password') !== params.get('repassword'))
    {
      setErrorMessage({type: 'mismatch-password', message: 'Passwords do not match!'});
      return;
    }

    // verify format of email (regex)

    // sign up post request
    await axios.post('https://gitfit.lucasreyna.me/passport/signup',
      params
    ).then((res) => {
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      setIsLoggedIn(true);
    }).catch((err) => {
      console.error(err.response.data.message);
      // need to decode this for set error message
    });
  };

  const renderForm = (
    <div className = 'form'>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div style={{display: 'inline-block'}}>
          <div className='input-container'>
            <label>Username: </label>
            <input className='input-box' type='text' name='username' required />
            <br/>{renderErrorMessage('uname')}
          </div>
          <div className='input-container'>
          <label>Password: </label>
          <input className='input-box' type='password' name='password' required />
          <br/>{renderErrorMessage('pass')}
        </div>
        <div className='input-container'>
          <label>Re-enter Password: </label>
          <input className='input-box' type='password' name='repassword' required />
          <br/>{renderErrorMessage('mismatch-password')}
        </div>
      </div>
       <div style={{display: 'inline-block'}}>
          <div className='input-container'>
            <label>Email: </label>
            <input className='input-box' type='text' name='email' required />
            <br/>{renderErrorMessage('email')}
          </div>
          <div className='input-container'>
          <label>Gender: </label>
          <div style={{backgroundColor: 'white', margin: '10px', gap: '8px', borderRadius: '5px', display: 'flex', flexDirection: 'column', fontSize: '16px'}}>
            <GenderSelect genderOptions={genderOptions} required/>
          </div>
          <br/>{renderErrorMessage('Gender')}
        </div>
        <div className='input-container'>
          <label>Birthday: </label>
          <input className='input-box' type='date' name='birthday' required />
          <br/>{renderErrorMessage('bday')}
        </div>
      </div>
      <div style={{display: 'inline-block'}}>
          <div className='input-container'>
            <label>Height: </label>
            <input className='input-box' type='number' name='height' required />
            <br/>{renderErrorMessage('height')}
          </div>
          <div className='input-container'>
          <label>Weight: </label>
          <input className='input-box' type='number' name='weight' required />
          <br/>{renderErrorMessage('weight')}
        </div>
        <div className='input-container'>
          <label>First Name: </label>
          <input className='input-box' type='text' name='firstname' required />
          <br/>{renderErrorMessage('fname')}
        </div>
        <div className='input-container'>
          <label>Last Name: </label>
          <input className='input-box' type='text' name='lastname' required />
          <br/>{renderErrorMessage('lname')}
        </div>
      </div>
        <div className='button-container'>
          <input type='submit'></input>
       </div>
      </form>
    </div>
  );

  if (isLoggedIn) {
    return (
      <Navigate
        to={'/summary'}
        replace
      />
    );
  }
  else {
    // bruh use css file what is this
    return (
      <div>
        <div className='GitFit logo'><img src={gitfitlogo} alt='GitFit Logo' sytle={{ verticalAlign: 'top', width: 700, height: 250 }}></img></div>
        <div style={{verticalAlign: 'middle'}}>
          <div style={{
            textAlign: 'left', verticalAlign: 'inherit', display: 'inline-block', backgroundColor: 'lightblue', borderRadius: 10, height: 500, maxHeight: '50%', width: 1750, maxWidth: '80%', margin: 25
          }}>
            <h5 style={{
              color: 'blue', textAlign: 'left', fontSize: 24, marginBottom: 10, marginTop: 5, marginLeft: 10,
            }}>Start for free</h5>
            <h2 style={{
              color: '#444444', textAlign: 'left', fontSize: 56, marginTop: 10, marginLeft: 9,
            }}>Create New Account</h2>
            <div className='login'stlye={{ marginLeft: 15, marginBottom: 15, marginRight: 10, backgroundColor: 'white', color: 'black', borderRadius: 5,}}><span>Register</span>
              {renderForm}</div>
            <br/>
            <br/>
          </div>
        </div>
        <br/>
        <div style={{ alignContent: 'center', margin: 10 }}>
            <button className='btn' onClick={routeChange} style={{ width: '35%', maxWidth: 500 }}>Already have an account? Login here!</button>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
