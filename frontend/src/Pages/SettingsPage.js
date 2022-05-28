import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import './SettingsPage.css';

// this page should show up if there is something wrong with url
function SettingsPage() {
  const [errorMessage, setErrorMessage] = useState({});

  const navigate = useNavigate();
  const renderErrorMessage = (val) =>
    val === errorMessage.type && (<div className='settings-error'>{errorMessage.message}</div>);

  async function deleteUser() {
    try {
      let submittedUsername = document.getElementById('settings-text-box').value;
      submittedUsername = submittedUsername.toLowerCase();
      if (submittedUsername !== localStorage.getItem('username')) {
        setErrorMessage({type: 'wrong-username', message: 'incorrect username entered, account not deleted'});
        return false;
      }
      await axios.delete('https://gitfit.lucasreyna.me/passport/user', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }}).then((res) => {
        // verify that user was actually deleted
        if (res.status == 204) {
          navigate('/logout');
        }
      });
    }
    catch (error) {
      // set error message later
      console.log(error);
      return false;
    }
  }

  return (
    <div id="settings-page" className="user-page">
      <NavBar/>
      <h1>User Settings</h1>
      <ul id='settings-list'>
        <li className='settings-list-element'>
          <span className='settings-text'>Delete Account</span>
          <button id='delete-button' className='settings-buttons' onClick={() => deleteUser()}>DELETE</button>
          <span>
            <input id='settings-text-box' type="text" placeholder='Enter Username' />
            {renderErrorMessage('wrong-username')}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default SettingsPage;
