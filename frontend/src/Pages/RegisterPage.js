import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gitfitlogo from '../images/GitFitLogo.svg';
import GenderSelect from '../GenderSelect';


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

  const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/login';
    navigate(path);
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className='error'>{errorMessages.message}</div>
    )
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // eslint-disable-next-line
    var { uname, pass , repass} = document.forms[0];

    //add if username taken code later

    if( pass.value !== repass.value)
    {
      setErrorMessages({name: "repass", message: "mismatched passwords"})
    }
    setIsSubmitted(true);
  };

  const renderForm = (
    <div className = 'form'>
      <form onSubmit={handleSubmit}>
        <div style={{display: 'inline-block'}}>
          <div className='input-container'>
            <label>Username: </label>
            <input className='input-box' type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
          <label>Password: </label>
          <input className='input-box' type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Re-enter Password: </label>
          <input className='input-box' type="password" name="pass" required />
          {renderErrorMessage("repass")}
        </div>
      </div>
       <div style={{display: 'inline-block'}}>
          <div className='input-container'>
            <label>Email: </label>
            <input className='input-box' type="text" name="email" required />
            {renderErrorMessage("email")}
          </div>
          <div className="input-container">
          <label>Gender: </label>
          <div style={{backgroundColor: 'white', margin: '10px', gap: '8px', borderRadius: '5px', display: 'flex', flexDirection: 'column', fontSize: '16px'}}>
            <GenderSelect genderOptions={genderOptions} required/>
          </div>
          {renderErrorMessage("Gender")}
        </div>
        <div className="input-container">
          <label>Birthday: </label>
          <input className='input-box' type="date" name="birthday" required />
          {renderErrorMessage("bday")}
        </div>
      </div>
      <div style={{display: 'inline-block'}}>
          <div className='input-container'>
            <label>Height: </label>
            <input className='input-box' type="number" name="height" required />
            {renderErrorMessage("height")}
          </div>
          <div className="input-container">
          <label>Weight: </label>
          <input className='input-box' type="number" name="weight" required />
          {renderErrorMessage("weight")}
        </div>
        <div className="input-container">
          <label>Name: </label>
          <input className='input-box' type="text" name="name" required />
          {renderErrorMessage("name")}
        </div>
      </div>
        <div className="button-container">
          <input type="submit"></input>
       </div>
      </form>
    </div>
  );


  return (
    <div>
      <div className='GitFit logo'><img src={gitfitlogo} alt="GitFit Logo" sytle={{ verticalAlign: 'top', width: 700, height: 250 }}></img></div>
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
          <div className="login"stlye={{ marginLeft: 15, marginBottom: 15, marginRight: 10, backgroundColor: 'white', color: 'black', borderRadius: 5,}}><text>Register</text>
            {isSubmitted ? navigate("/summary", {replace: true}) : renderForm}</div>
          <br/>
          <br/>
        </div>
      </div>
      <br/>
      <div style={{ alignContent: 'center', margin: 10 }}>
          <button className="btn" onClick={routeChange} style={{ width: '35%', maxWidth: 500 }}>Already have an account? Login here!</button>
      </div>
      <Link to="/summary">Summary Link for Dev Purposes</Link>
    </div>
  );
}

export default RegisterPage;
