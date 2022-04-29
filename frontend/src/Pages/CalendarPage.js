import React from 'react';
import Calendar from '../CalendarObject/Calendar';
import NavBar from '../NavBar';

// my hope is that we don't depend on filler info
const exampleDateData = {
  "month": 4, // should correspond to April
  "year": 2022,
  "day": {
    2: {
      "mood": "😡",
      "cal_in": 2000,
      "cal_out": 200,
    },
    4: {
      "mood": "😬",
      "cal_in": 2000,
      "cal_out": 200,
    },
    14: {
      "mood": "😐",
      "cal_in": 2000,
      "cal_out": 200,
    }
  }
};

console.log(exampleDateData.day[2]);

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