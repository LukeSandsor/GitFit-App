import React from 'react';
import Calendar from '../CalendarObject/Calendar';
import NavBar from '../NavBar';

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
      <NavBar />
      <h3>GitFit: Calendar</h3>
      <Calendar dateData={exampleDateData}/>
    </div>
  );
}

export default CalendarPage;