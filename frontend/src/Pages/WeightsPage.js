import React from 'react';
import { Link } from 'react-router-dom';
import './WeightsPage.css';
import pushLogo from '../images/PushLogo.png';
import pullLogo from '../images/PullLogo.png';
import legsLogo from '../images/LegsLogo.png';
import NavBar from '../NavBar';

function WeightsPage() {
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
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Number of Rets'
                            type='number'
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Weight in pounds'
                            type='number'
                        />
                        <button className="weight-button">
                            Log Workout</button>
                    </form>
                    </label>
            </div>
            <div className="block--styling">
                <h1>Pull</h1>
                    <img src={pullLogo} alt="PushImage" style={{ verticalAlign: 'top', maxWidth: 200 }}></img>
                    <br></br>
                    <label style={{ textAlign: 'center' }}>
                        <text style={{ color: 'grey', fontSize: 40 }}>Enter Weight</text>
                    <form>
                        <input
                            className='weight-input'
                            placeholder='Number of Sets'
                            type='number'
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Number of Rets'
                            type='number'
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Weight in pounds'
                            type='number'
                        />
                        <button className="weight-button">
                            Log Workout</button>
                    </form>
                    </label>
            </div>
            <div className="block--styling">
                <h1>Legs</h1>
                    <img src={legsLogo} alt="PushImage" style={{ verticalAlign: 'top', maxWidth: 200 }}></img>
                    <br></br>
                    <label style={{ textAlign: 'center' }}>
                        <text style={{ color: 'grey', fontSize: 40 }}>Enter Weight</text>
                    <form>
                        <input
                            className='weight-input'
                            placeholder='Number of Sets'
                            type='number'
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Number of Rets'
                            type='number'
                        /><br/>
                        <input
                            className='weight-input'
                            placeholder='Weight in pounds'
                            type='number'
                        />
                        <button className="weight-button">
                            Log Workout</button>
                    </form>
                    </label>
            </div>
        <div>
        </div>
     </div>
  );
}
/* <label style={{textAlign: "left"}}>
            <input type="text" name="Push" />
            </label>
            <input type="submit" value="Submit" />
            <label style={{padding: 20, textAlign: "center"}}>
            <input type="text" name="Pull" />
            </label>
            <input type="submit" value="Submit" />
            <label style={{padding: 20, textAlign: "right"}}>
            <input type="text" name="Leg" />
            </label>
            <input type="submit" value="Submit" /> */
export default WeightsPage;
