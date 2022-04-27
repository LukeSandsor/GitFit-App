import React from 'react'
import './Calendar.css'
import Tile from './Tile/Tile';

const numCols = 7; // seven days in a week
const numRows = 6; // at most 6 weeks to display
const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

// sets up the days of the week in table format
function CalendarHeader()  {
  const dayRow = daysOfWeek.map((value) => {
    return (<th>{value}</th>);
    }
  );
    return (
      <thead>
        <tr>
          {dayRow}
        </tr>
      </thead>
    );
}

function CalendarBody(props) {
    // For loop to loop through rows and columns
    return (
        <tbody>
          <tr>
            <td><Tile /></td>
            <td><Tile /></td>
            <td><Tile /></td>
            <td><Tile /></td>
            <td><Tile isSelected={true}/></td>
            <td><Tile /></td>
            <td><Tile /></td>
          </tr>
        </tbody>
    );
}

function Calendar(props) {
    return (
      <div className='calendar'>
        <h4>{props.dateData.month} {props.dateData.year}</h4>
        <table>
            <CalendarHeader />
            <CalendarBody /> 
        </table>
      </div>
    );
}

export default Calendar;
