import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import gitfitlogo from '../images/GitFitLogo.svg';
import grandma from '../images/LoginGrandma.png';
import isAuthenticated from '../lib/isAuthenticated';

import "./LoginPage.css";

function LoginPage() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/register';
    navigate(path);
  }

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  
  ]

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className='error'>{errorMessages.message}</div>
    )
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    let form = event.target;
    let formData = new FormData(form);
    let params = new URLSearchParams(formData);
  
    /*const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }*/
    // TODO: changing the url to /signup and creating new data works
    // logging in afterwards works too
    try {
      await axios.post('http://localhost:2414/passport/login', // 'https://gitfit.lucasreyna.me/passport/login'
        params
      ).then((res) => {
        console.log(res);
        return res;
      }).then(data => {
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
      }).catch( (err) => {
        console.error(err);
      });
    }
    catch (err)
    {
      console.error(err);
    }
    /*await axios.get('http://localhost:2414/passport/user', {// 'https://gitfit.lucasreyna.me/passport/user'
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token') 
      }
    }).then(res => {
      console.log(res.json());
    }).then(user => {
      // set user context
    }).catch(err => {
      console.log(err);
    });*/
  }

  const renderForm = (
    <div className = 'form'>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className='input-container'>
          <label>Username: </label>
          <input className='input-box' type="text" name="username" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
         <label>Password: </label>
         <input className='input-box' type="password" name="password" required />
         {renderErrorMessage("pass")}
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
      </form>
    </div>
  );

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  // localStorage.setItem('token', true) in broswer console to override this
  // delete localStorage token to remove this
  if (isLoggedIn) {
    return (
      <Navigate
        to={'/summary'}
        replace
      />
    );
  }
  else {

    // might want to put style in .css
    return (
      <div>
        <div className='GitFit logo'><img src={gitfitlogo} alt="GitFit Logo" sytle={{ verticalAlign: 'top', width: 700, height: 250 }}></img></div>
        <div style={{verticalAlign: 'middle'}}>
          <div style={{
            textAlign: 'left', verticalAlign: 'inherit', display: 'inline-block', backgroundColor: 'lightblue', borderRadius: 10, height: 500, maxHeight: '50%', width: 700, maxWidth: '80%', margin: 25
          }}>
            <h2 style={{
              color: '#444444', textAlign: 'left', fontSize: 56, marginTop: 10, marginLeft: 9,
            }}>Login</h2>
            <div className="login"stlye={{ marginLeft: 15, marginBottom: 15, marginRight: 10, backgroundColor: 'white', color: 'black', borderRadius: 5,}}><span>Sign In</span>
              {isSubmitted ? navigate("/summary", {replace: true}) : renderForm}
            </div>
            <br/>
            <br/>
            <span style={{
              marginLeft: 15, marginBottom: 15, marginRight: 10, color: '#444444', borderRadius: 5, fontSize: '24px',
            }}>Forgot Password? Sucks for your at the moment</span>
          </div>
          <div style={{
            textAlign: 'left', verticalAlign: 'inherit', display: 'inline-block', 
          }}>
            <img src={grandma} alt="Deadlifting G-ma" style={{borderRadius: 10, height: 500, maxHeight: '50%', width: 700, maxWidth: '80%', margin: 25}}></img>
          </div>
        </div>
        <br/>
        <div style={{ alignContent: 'center', margin: 10 }}>
            <form>
              <button className="bttn" onClick={routeChange} style={{ width: '35%', maxWidth: 500 , fontSize: 21}}>Don't have an account? Register here!</button>
            </form>
        </div>
        <br/>
        <Link to="/summary">Summary Link for Dev Purposes</Link>
      </div>
    );
  }
}


export default LoginPage;
