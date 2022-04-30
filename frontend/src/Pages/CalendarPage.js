import React from 'react';
import Calendar from '../CalendarObject/Calendar';
import NavBar from '../NavBar';


function CalendarPage()
{
  return (
    <div>
      <NavBar />
      <h3>GitFit: Calendar</h3>
      <Calendar />
    </div>
  );
}

export default CalendarPage;