import React from 'react'
import './Calendar.css'
import Tile from './Tile/Tile';

const NUM_COLS = 7; // seven days in a week
const NUM_ROWS = 6; // at most 6 weeks to display
const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

// sets up the days of the week in table format
function CalendarHeader()  {
  const dayRow = daysOfWeek.map((value) => {
    return (<th class="day-week-text">{value}</th>);
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

// Create a matrix of row length and col length
const initializeGrid = () => {
  const grid = [];
  for (let row = 0; row < NUM_ROWS; row++) {
    const currentRow = [];
    for (let col = 0; col < NUM_COLS; col++) {
        const currentTile = {
          row, // row value, set later
          col, // col value, set later
          num: 2, // num value of tile, set later
          isSelected: false, // set all tiles to default
        };
        currentRow.push(currentTile);
    }
    grid.push(currentRow);
  }
  return grid;
}

// get the grid matrix, then assign a tile in each row for each col
function CalendarBody(props) {
  const grid = initializeGrid();
  const calendarBody = grid.map((row, rowIndex) => {
    // return from the column map, whole row
    return (
      <tr key={rowIndex}>
        {row.map((tile, tileIndex) => {
            const {isSelected, num} = tile; // is from the currentTile Object
            // return from the row map, single Tile
            return (
              <td>
                <Tile
                  key={tileIndex}
                  /*onMouseDown={(row, col) => handleMouseDown(row, col)}
                  onMouseUp={(row, col) => handleMouseUp()}
                  onMouseEnter={(row, col) => handleMouseEnter(row, col)}*/
                  row={rowIndex}
                  col={tileIndex}
                  num={num}
                  isSelected={isSelected}
                  ></Tile>
                </td>
            );
        })}
      </tr>
      );
  });

  // return the matrix of Tiles in a tbody object
  return (
    <tbody>
        {calendarBody}
    </tbody>
  );
}

function Calendar(props) {
    return (
      <div className='calendar'>
        <div>
          <button class="arrow-button">&#8678;</button>
          <span id="month-year-text">{props.dateData.month} {props.dateData.year}</span>
          <button class="arrow-button">&#8680;</button>
        </div>
        <table>
            <CalendarHeader />
            <CalendarBody /> 
        </table>
      </div>
    );
}

export default Calendar;
