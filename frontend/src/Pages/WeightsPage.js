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

  async function postLegs() {
    try {
      const reps = document.getElementById('reps').valueAsNumber;
      const sets = document.getElementById('sets').valueAsNumber;
      const weight = document.getElementById('weight').valueAsNumber;
      const name = document.getElementById('name').value;


      if (weight <= 0 || isNaN(weight)) {
        setErrorMessage({type: 'legs-input', message: 'Weight Input must be above zero'});
        return false;
      }
      if (weight > 1000) {
        setErrorMessage({type: 'legs-input', message: 'Calm down there Ronnie Coleman'});
        return false;
      }
      if (reps <= 0  || isNaN(reps)) {
        setErrorMessage({type: 'legs-input', message: 'Reps must be above zero'});
        return false;
      }
      if(sets <= 0  || isNaN(sets)) {
        setErrorMessage({type: 'legs-input', message: 'Sets must be above zero'});
        return false;
      }
      if(name.length < 3) {
        setErrorMessage({type: 'legs-input', message: 'Gotta have a name champ'});
      }
      setErrorMessage({});
      const json = JSON.stringify({
            username: currentUser,
            reps: reps,
            sets: sets,
            weight: weight,
            name: name,
            type: "Legs"
        })
      const response = await axios.post(
         'https://gitfit.lucasreyna.me/weights', json, { headers: { 'Content-Type': 'application/json'}});
      if (response.status !== 201) {
        setErrorMessage({type: 'legs-input', message: 'Error uploading leg workout'});
        console.log('Non-201 Response');
      }
      console.log(response.data);
    }
    catch (error) {
        console.log(error);
      return false;
    }
  }

  async function postPull() {
    try {
      const reps = document.getElementById('repspull').valueAsNumber;
      const sets = document.getElementById('setspull').valueAsNumber;
      const weight = document.getElementById('weightpull').valueAsNumber;
      const name = document.getElementById('namepull').value;


      if (weight <= 0 || isNaN(weight)) {
        setErrorMessage({type: 'pull-input', message: 'Weight Input must be above zero'});
        return false;
      }
      if (weight > 1000) {
        setErrorMessage({type: 'pull-input', message: 'Calm down there Ronnie Coleman'});
        return false;
      }
      if (reps <= 0  || isNaN(reps)) {
        setErrorMessage({type: 'pull-input', message: 'Reps must be above zero'});
        return false;
      }
      if(sets <= 0  || isNaN(sets)) {
        setErrorMessage({type: 'pull-input', message: 'Sets must be above zero'});
        return false;
      }
      if(name.length < 3) {
        setErrorMessage({type: 'pull-input', message: 'Gotta have a name champ'});
      }
      setErrorMessage({});
      const json = JSON.stringify({
            username: currentUser,
            reps: reps,
            sets: sets,
            weight: weight,
            name: name,
            type: "Pull"
        })
      const response = await axios.post(
         'http://localhost:2414/weights'/*"https://gitfit.lucasreyna.me/weights*/, json, { headers: { 'Content-Type': 'application/json'}});
      if (response.status !== 201) {
        setErrorMessage({type: 'pull-input', message: 'Error uploading leg workout'});
        console.log('Non-201 Response');
      }
      console.log(response.data);
    }
    catch (error) {
        console.log(error);
      return false;
    }
  }

  async function postPush() {
    try {
      const reps = document.getElementById('repspush').valueAsNumber;
      const sets = document.getElementById('setspush').valueAsNumber;
      const weight = document.getElementById('weightpush').valueAsNumber;
      const name = document.getElementById('namepush').value;


      if (weight <= 0 || isNaN(weight)) {
        setErrorMessage({type: 'push-input', message: 'Weight Input must be above zero'});
        return false;
      }
      if (weight > 1000) {
        setErrorMessage({type: 'push-input', message: 'Calm down there Ronnie Coleman'});
        return false;
      }
      if (reps <= 0 || isNaN(reps)) {
        setErrorMessage({type: 'push-input', message: 'Reps must be above zero'});
        return false;
      }
      if(sets <= 0 || isNaN(sets)) {
        setErrorMessage({type: 'push-input', message: 'Sets must be above zero'});
        return false;
      }
      if(name.length < 3) {
        setErrorMessage({type: 'push-input', message: 'Gotta have a valid name champ'});
      }
      setErrorMessage({});
      const json = JSON.stringify({
            username: currentUser,
            reps: reps,
            sets: sets,
            weight: weight,
            name: name,
            type: "Push"
        })
      const response = await axios.post(
        'http://localhost:2414/weights'/*"https://gitfit.lucasreyna.me/weights*/, json, { headers: { 'Content-Type': 'application/json'}});
      if (response.status !== 201) {
        setErrorMessage({type: 'push-input', message: 'Error uploading leg workout'});
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
                        <text style={{ color: 'grey', fontSize: 40 }}>Enter Weight</text>
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
                        <button onClick={() => postPush()} className="weight-button">
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
                        <text style={{ color: 'grey', fontSize: 40 }}>Enter Weight</text>
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
                        <button onClick={() => postPull()} className="weight-button">
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
                        <text style={{ color: 'grey', fontSize: 40 }}>Enter Weight</text>
                    <form>
                        <input
                            className='weight-input'
                            placeholder='Number of Sets'
                            type='number'
                            id='sets'
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Number of Reps'
                            type='number'
                            id='reps'
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Weight in pounds'
                            type='number'
                            id='weight'
                        />
                        <br/>
                        <input
                            className='weight-input'
                            placeholder='Name of lift'
                            type='text'
                            id='name'
                        />
                        <button onClick={() => postLegs()} className="weight-button">
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
