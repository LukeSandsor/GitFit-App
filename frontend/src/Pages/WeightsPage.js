import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Redirect } from 'react';
import './WeightsPage.css';
import pushLogo from '../images/PushLogo.png';
import pullLogo from '../images/PullLogo.png';
import legsLogo from '../images/LegsLogo.png';
import NavBar from '../NavBar';
import LiftingSelect from '../LiftingSelect';
import axios from 'axios';
import HistoryBarGraph from '../HistoryBarGraph';

function WeightsPage() {

  const LiftingTypes = [
        {
            label: 'Push',
            value: 'Push'
        },
        {
          label: 'Pull',
          value: 'Pull'
        },
        {
          label: 'Legs',
          value: 'Legs'
        }
      ];

  const [errorMessage, setErrorMessage] = useState({});
  const [userWorkoutInfo, setUserWorkoutInfo] = useState({});
  const [currentUser, setCurrentUser] = useState('');
  const[typeSelect, setTypeSelect] = useState({});

  function getDateAsObject()
  {
    const currentDate = new Date();
    return {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
      day: currentDate.getDate()
    };
  }

  useEffect(() => {
      setCurrentUser(localStorage.getItem('username'));
  }, []);

  useEffect(() => {
        /*updateByType().then(result => {
            if (result)
                setTypeSelect(result);
        }, [typeSelect]);

        updateByName().then(result => {
            if (result)
                setUserWorkoutInfo(result);
        }, [userWorkoutInfo]);*/
    });

  async function updateByType() {
    try {
      console.log(typeSelect);
      if (typeSelect != 'Legs' && typeSelect != 'Push' && typeSelect != 'Pull') {
        setErrorMessage({type: 'type-select', message: 'Must Select A type'});
        return false;
      }
      setErrorMessage({});
      const response = await axios.get(`https://gitfit.lucasreyna.me/weights?username=${currentUser}&type=${typeSelect}`);
      console.log(response.data)
      setUserWorkoutInfo(response.data);
      return true;
    } 
    catch (error) {
      console.log(error);
      return false;
    }
  }

  async function updateByName() {
    try {
      const name = document.getElementById('searchName').value;
      console.log(name);
      if(name.length < 3) {
        setErrorMessage({type: 'name-select', message: 'Gotta search a valid name slugger!'});
      }
      setErrorMessage({});
      const response = await axios.get(`https://gitfit.lucasreyna.me/weights?username=${currentUser}&name=${name}`);
      console.log(response.data)
      setUserWorkoutInfo(response.data);
      return true;
    } 
    catch (error) {
      console.log(error);
      return false;
    }
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  async function postWorkout(type) {
    try {
      const reps = document.getElementById(`reps${type}`).valueAsNumber;
      const sets = document.getElementById(`sets${type}`).valueAsNumber;
      const weight = document.getElementById(`weight${type}`).valueAsNumber;
      const name = document.getElementById(`name${type}`).value;


      if (weight <= 0 || isNaN(weight)) {
        setErrorMessage({type: `${type}-input`, message: 'Weight Input must be above zero'});
        return false;
      }
      if (weight > 1000) {
        setErrorMessage({type: `${type}-input`, message: 'Calm down there Ronnie Coleman'});
        return false;
      }
      if (reps <= 0  || isNaN(reps)) {
        setErrorMessage({type: `${type}-input`, message: 'Reps must be above zero'});
        return false;
      }
      if(sets <= 0  || isNaN(sets)) {
        setErrorMessage({type: `${type}-input`, message: 'Sets must be above zero'});
        return false;
      }
      if(name.length < 3) {
        setErrorMessage({type: `${type}-input`, message: 'Gotta have a name champ'});
      }
      setErrorMessage({});
      const json = JSON.stringify({
          ...getDateAsObject(),
          username: currentUser,
          reps: reps,
          sets: sets,
          weight: weight,
          name: name,
          type: `${type}`.split(' ').map(capitalize).join(' ')
        });

      const response = await axios.post(
         'https://gitfit.lucasreyna.me/weights', json, { headers: { 'Content-Type': 'application/json'}});
      if (response.status !== 201) {
        setErrorMessage({type: `${type}-input`, message: `Error uploading ${type} workout`});
        console.log('Non-201 Response');
      }
      console.log(response.data);
    }
    catch (error) {
        console.log(error);
      return false;
    }
  }

  const renderErrorMessage = (val) =>
    val === errorMessage.type && (<span class='weights-error'>{errorMessage.message}</span>);

  return (
        <div >
            <NavBar/>
            <h1>Weight Training</h1>
            <div className="block--styling">
                <h1>Push</h1>
                    <img src={pushLogo} alt="PushImage" style={{ verticalAlign: 'top', maxWidth: 200 }}></img>
                    <br></br>
                    <label style={{ textAlign: 'center' }}>
                        <span style={{ color: 'grey', fontSize: 40 }}>Enter Weight</span>
                    <form>
                        <input
                            className='weight-input'
                            placeholder='Number of Sets'
                            type='number'
                            id='setspush'
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Number of Reps'
                            type='number'
                            id='repspush'
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Weight in pounds'
                            type='number'
                            id='weightpush'
                        />
                        <br/>
                        <input
                            className='weight-input'
                            placeholder='Name of lift'
                            type='text'
                            id='namepush'
                        />
                        <button onClick={() => postWorkout('push')} className="weight-button">
                            Log Workout</button><br/>
                            {renderErrorMessage('push-input')}
                    </form>
                    </label>
            </div>
            <div className="block--styling">
                <h1>Pull</h1>
                    <img src={pullLogo} alt="PullImage" style={{ verticalAlign: 'top', maxWidth: 200 }}></img>
                    <br></br>
                    <label style={{ textAlign: 'center' }}>
                        <span style={{ color: 'grey', fontSize: 40 }}>Enter Weight</span>
                    <form>
                        <input
                            className='weight-input'
                            placeholder='Number of Sets'
                            type='number'
                            id='setspull'
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Number of Reps'
                            type='number'
                            id='repspull'
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Weight in pounds'
                            type='number'
                            id='weightpull'
                        />
                        <br/>
                        <input
                            className='weight-input'
                            placeholder='Name of lift'
                            type='text'
                            id='namepull'
                        />
                        <button onClick={() => postWorkout('pull')} className="weight-button">
                            Log Workout</button><br/>
                            {renderErrorMessage('pull-input')}
                    </form>
                    </label>
            </div>
            <div className="block--styling">
                <h1>Legs</h1>
                    <img src={legsLogo} alt="LegsImage" style={{ verticalAlign: 'top', maxWidth: 200 }}></img>
                    <br></br>
                    <label style={{ textAlign: 'center' }}>
                        <span style={{ color: 'grey', fontSize: 40 }}>Enter Weight</span>
                    <form>
                        <input
                            className='weight-input'
                            placeholder='Number of Sets'
                            type='number'
                            id='setslegs'
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Number of Reps'
                            type='number'
                            id='repslegs'
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Weight in pounds'
                            type='number'
                            id='weightlegs'
                        />
                        <br/>
                        <input
                            className='weight-input'
                            placeholder='Name of lift'
                            type='text'
                            id='namelegs'
                        />
                        <button onClick={() => postWorkout('legs')} className="weight-button">
                            Log Workout</button><br/>
                            {renderErrorMessage('legs-input')}
                    </form>
                    </label>
            </div>
        <div>
        <div className='weight-checker'>
          <h3 style={{ marginTop: '15px' }}>Find Workouts</h3>
          <div className='weight-selectors' style={{display: 'inline-block'}}>
            <div className='lift-type' style={{display: 'inline-block', verticalAlign: 'inherit' }}>
                <LiftingSelect LiftingType={LiftingTypes} setTypeSelect={setTypeSelect}/>
            </div>
            <button onClick={() => updateByType()} className='checker-button'>Submit</button>
            <br/>
            {renderErrorMessage('type-select')}
          </div>
          <div className='weight-selectors'  style={{display: 'inherit'}}>
            <input className='lift-name' type='text' name='name' placeholder='Name of Lift' id='searchName'></input><br/>
            <button onClick={() => updateByName()} className='checker-button'>Submit</button>
            <br/>
            {renderErrorMessage('name-select')}
          </div>
          <div className="graph-container" style={{display: 'inherit'}}>
            <HistoryBarGraph workouts={userWorkoutInfo} />
          </div>
        </div>
        </div>
     </div>
  );
}
export default WeightsPage;
