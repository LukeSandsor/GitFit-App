import React from 'react';
import {Link} from 'react-router-dom';
import './WeightsPage.css';
import pushLogo from "../images/PushLogo.png";
import pullLogo from "../images/PullLogo.png";
import legsLogo from "../images/LegsLogo.png";
import NavBar from '../NavBar';


function WeightsPage()
{
    return (
        <div >
            <NavBar/>
            <h1>Weight Training</h1>
            <div class="block--styling">
                <h3>Push</h3>
                    <img src={pushLogo} alt="PushImage" style={{verticalAlign: 'top', maxWidth: 200}}></img>
                    <br></br>
                    <label style={{textAlign: "left"}}>
                        <text style={{color: 'grey', fontSize: 40}}>Enter Weight</text>
                    <input type="text" name="Push" />
                    </label>
                    <input type="submit" value="Submit" />
            </div>
            <div class="block--styling">
                <h3>Pull</h3>
                    <img src={pullLogo} alt="PushImage" style={{verticalAlign: 'top', maxWidth: 200}}></img>
                    <br></br>
                    <label style={{textAlign: "left"}}>
                        <text style={{color: 'grey', fontSize: 40}}>Enter Weight</text>                    
                    <input type="text" name="Push" />
                    </label>
                    <input type="submit" value="Submit" />
            </div>
            <div class="block--styling">
                <h3>Legs</h3>
                    <img src={legsLogo} alt="PushImage" style={{verticalAlign: 'top', maxWidth: 200}}></img>
                    <br></br>
                    <label style={{textAlign: "left"}}>
                        <text style={{color: 'grey', fontSize: 40}}>Enter Weight</text>                  
                    <input type="text" name="Push" />
                    </label>
                    <input type="submit" value="Submit" />
            </div>

        <div>
        </div>
            <Link to="/summary">Summary Link for Dev Purposes</Link>
        </div>
    );
}
/*<label style={{textAlign: "left"}}>
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
            <input type="submit" value="Submit" />*/
export default WeightsPage;