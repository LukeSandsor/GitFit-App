import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import gitfitlogo from '../images/GitFitLogo.svg';
import grandma from '../images/LoginGrandma.png';

import "./LoginPage.css";

function LoginPage() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
  
  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

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
    }
  };

  const renderForm = (
    <div className = 'form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Username: </label>
          <input className='input-box' type="text" name="uname" require />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
         <label>Password: </label>
         <input className='input-box' type="password" name="pass" required />
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
          <div className="login"stlye={{ marginLeft: 15, marginBottom: 15, marginRight: 10, backgroundColor: 'white', color: 'black', borderRadius: 5,}}><text>Sign In</text>
            {isSubmitted ? navigate("/summary", {replace: true}) : renderForm}
          </div>
          <br/>
          <br/>
          <text style={{
            marginLeft: 15, marginBottom: 15, marginRight: 10, color: '#444444', borderRadius: 5, fontSize: '24px',
          }}>Forgot Password? Sucks for your at the moment</text>
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


export default LoginPage;
