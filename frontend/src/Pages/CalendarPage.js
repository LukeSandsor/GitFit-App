import React from 'react';
import Calendar from '../CalendarObject/Calendar';
import NavBar from '../NavBar';
import './CalendarPage.css';

function CalendarPage()
{
  return (
    <div>
      <NavBar />
      <h3>GitFit: Calendar</h3>
      <div id="page-contents">
        <Calendar />
        <div id="day-info-block">
          <div id="day-title">Select a date to see your fitness information</div>
          <h3 style={{"margin-bottom": "0"}}>Daily Breakdown</h3>
          <div id="daily-breakdown">
            <p>Calories Lost: </p>
            <p>Calories Consumed: </p>
            <p>Weight: </p><br></br>
            <p># of Workouts: </p>
            <p># of Steps Taken: </p>
            <p>Mood for the Day: </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;