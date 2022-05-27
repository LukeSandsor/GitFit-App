import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import gitfitlogo from '../images/GitFitLogo.svg';
import groupPhoto from '../images/groupPhoto.png';
import NavBar from '../NavBar';

function AboutPage() {
  return (
        <div >
            <NavBar/>
            <div className='GitFit logo'><img src={gitfitlogo} alt="GitFit Logo" sytle={{ verticalAlign: 'top', width: 700, height: 250 }}></img></div>
            <h1>About GitFit</h1>
            <img src={groupPhoto} alt="PushImage" style={{ verticalAlign: 'top', maxWidth: 1000 }}></img>
            <h2>Meet the Developers</h2>
            <br></br>
            <br></br>
            <br></br>
            <h3 style={{ color: 'white'}}>About the Project</h3>
            <div className='center'>
                    <br></br>
                    <label style={{ textAlign: 'center' }}>
                        <span style={{ color: 'white', fontSize: 24 }}>The GitFit App is a fitness tracker designed for the CSC307 Introduction to Software Engineering course at California Polytechnic State University San Luis Obispo, taught by BJ Klingenberg. The app is a way to practically apply lessons learned, like linking frontend and backend implementations.</span>
                    </label>
            </div>
        <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
            <Link to="/summary">Summary Link for Dev Purposes</Link>
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
export default AboutPage;
