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
            <div className='mission'>
                    <br></br>
                    <label style={{ textAlign: 'center' }}>
                        <span style={{ color: 'white', fontSize: 24 }}> Hi there! Whether you consider yourself to be a dedicated gym enthusiast, or if you are just getting started on your fitness journey, 
                                                                        we're glad that you've chosen GitFit as your fitness assistant. No matter what your fitness goals are, our hope is that GitFit 
                                                                        can help you meet those goals. Maintaining both physical health and mental health is getting harder and harder these days, but 
                                                                        we hope you'll join us on our mission along with 10s of other users to... GitFit!</span>
                    </label>
            </div>
            <br></br>
            <br></br>
            <img src={groupPhoto} alt="PushImage" style={{ verticalAlign: 'top', maxWidth: 1000 }}></img>
            <h2>Meet the Developers:</h2>
                <text>(Left to right) Lucas Sandsor, Lucas Reyna, Brett Gowling, Joey Marenin</text>
            <br></br>
            <br></br>
            <br></br>
            <h3 style={{ color: 'white'}}>About the Project</h3>
            <div className='center'>
                    <br></br>
                    <label style={{ textAlign: 'center' }}>
                        <span style={{ color: 'white', fontSize: 24 }}> The GitFit App is a fitness tracker designed for the CSC307 Introduction to Software Engineering course at California Polytechnic 
                                                                        State University San Luis Obispo, taught by BJ Klingenberg. The app is a way to practically apply lessons learned, like linking 
                                                                        frontend and backend implementations.</span>
                    </label>
            </div>
            <br></br>
            <br></br>
        </div>
  );
}

export default AboutPage;
