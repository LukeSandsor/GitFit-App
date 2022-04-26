import React from 'react';
import './index.css';
import Calendar from './CalendarObject/Calendar';

const exampleDateData = {
  "dayOfWeek": "Thursday",
  "dayOfMonth": 25,
  "month": "April",
  "year": 2022
}

function CalendarPage()
{
  return (
    <div>
      <h3>GitFit: Calendar</h3>
      <Calendar dateData={exampleDateData}/>
    </div>
  );
}

export default CalendarPage;