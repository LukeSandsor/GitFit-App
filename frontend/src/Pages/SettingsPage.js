import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import './SettingsPage.css';

// this page should show up if there is something wrong with url
function SettingsPage() {
  const navigate = useNavigate();

  async function deleteUser() {
    try {
      await axios.delete(`http://localhost:2414/passport/user`, {
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
          <span className='settings-text'>Delete Account </span>
          <button id='delete-button' className='settings-buttons' onClick={() => deleteUser()}>DELETE</button>
        </li>
      </ul>
    </div>
  );
}

export default SettingsPage;
