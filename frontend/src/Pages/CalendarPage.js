import React, { useEffect, useState } from 'react';
import Calendar from '../CalendarObjects/Calendar';
import NavBar from '../NavBar';
import './CalendarPage.css';
import CalendarDateInfoContext from '../context/calendar-date.context';
import MonthlyMoodDataContext from '../context/calendar-mood.context';
import MoodBarGraph from '../CalendarObjects/MoodBarGraph';

function CalendarPage() {
  const [dailyInfo, setDailyInfo] = useState({
    dateString: '',
    calLost: '',
    calCons: '',
    weight: '',
    numWork: '',
    numStep: '',
    mood: '',
  });

  const [monthlyMoodData, setMonthlyMoodData] = useState({});

  const updateDay = (info) => setDailyInfo(info);
  const updateMonthlyMoodData = (info) => setMonthlyMoodData(info);

  return (
    <div>
      <NavBar />
      <h1>Calendar</h1>
      <div id="page-contents">
        <CalendarDateInfoContext.Provider value={{ dailyInfo, updateDay }}>
            <MonthlyMoodDataContext.Provider value={{ monthlyMoodData, updateMonthlyMoodData }}>
                <Calendar />
            </MonthlyMoodDataContext.Provider>
        </CalendarDateInfoContext.Provider>
        <div id="day-info-block">
          <div id="day-title">
            <span>Select a date to see your fitness information</span>
            <p>{dailyInfo.dateString}</p>
          </div>
          <h3 style={{ marginBottom: '0' }}>Daily Breakdown</h3>
          <div id="daily-breakdown">
            <p>Calories Lost: {dailyInfo.calLost}</p>
            <p>Calories Consumed: {dailyInfo.calCons}</p>
            <p>Weight: {dailyInfo.weight}</p><br></br>
            <p># of Workouts: {dailyInfo.numWork}</p>
            <p># of Steps Taken: {dailyInfo.numStep}</p>
            <p>Mood for the Day: {dailyInfo.mood}</p>
          </div>
        </div>
        <div id='mood-bar-graph'>
          <MoodBarGraph />
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
