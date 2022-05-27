import React from 'react';
import NavBar from '../NavBar';
import './SettingsPage.css';

// this page should show up if there is something wrong with url
function SettingsPage() {
  return (
    <div id="settings-page" className="user-page">
      <NavBar/>
      <h1>User Settings</h1>
      <ul id='settings-list'>
        <li className='settings-list-element'>
          <span className='settings-text'>Delete Account </span>
          <button id='delete-button' className='settings-buttons'>DELETE</button>
        </li>
      </ul>
    </div>
  );
}

export default SettingsPage;
