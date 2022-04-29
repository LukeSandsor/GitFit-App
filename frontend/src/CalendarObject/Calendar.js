import React from 'react'
import './Calendar.css'
import Tile from './Tile/Tile';

const NUM_COLS = 7; // seven days in a week
const NUM_ROWS = 6; // at most 6 weeks to display
const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const monthStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
          def_mood: "", // mood value
          def_num: "", // num value of tile, set later
          isSelected: false, // set all tiles to default
          isNotActive: true, // set all tiles to default
        };
        currentRow.push(currentTile);
    }
    grid.push(currentRow);
  }
  return grid;
}

const loadCalendarBodyInfo = (dateData) => {
  let currentMood = "";
  const currentMonth = dateData.month - 1;
  const currentYear = dateData.year;
  let currentDay = new Date(currentYear, currentMonth, 1);

  let firstDayOfWeekIndex = currentDay.getDay(); // 0 to 6, sunday is first
  let active = false;
  let finished = false;

  const grid = initializeGrid();
  const calendarBody = grid.map((row, rowIndex) => {
    // return from the column map, whole row
    return (
      <tr key={rowIndex}>
        {row.map((tile, tileIndex) => {
            // return from the row map, single Tile
            const {isSelected, def_mood, def_num} = tile; // is from the currentTile Object

            // wait until proper day of the week
            if (!active)
            {
              // check day of the week before index
              if (firstDayOfWeekIndex === tileIndex && !finished)
              {
                // needed to offset currentDay to 1 
                currentDay.setDate(currentDay.getDate() - 1);
                active = true;
              }
              else
              {
                return (
                  <td>
                    <Tile
                      key={tileIndex}
                      /*onMouseDown={(row, col) => handleMouseDown(row, col)}
                      onMouseUp={(row, col) => handleMouseUp()}
                      onMouseEnter={(row, col) => handleMouseEnter(row, col)}*/
                      row={rowIndex}
                      col={tileIndex}
                      mood={def_mood}
                      num={def_num}
                      isSelected={isSelected}
                      isNotActive={true}
                      ></Tile>
                  </td>
                );
              }
            }

            if (active)
            {
              currentDay.setDate(currentDay.getDate() + 1);
              if (currentMonth === currentDay.getMonth())
              {
                // check if this day has a mood loggged
                if (dateData.day[currentDay.getDate()] !== undefined)
                {
                  currentMood = dateData.day[currentDay.getDate()].mood;
                }
                else
                {
                  currentMood = "";
                }

                return (
                  <td>
                    <Tile
                      key={tileIndex}
                      /*onMouseDown={(row, col) => handleMouseDown(row, col)}
                      onMouseUp={(row, col) => handleMouseUp()}
                      onMouseEnter={(row, col) => handleMouseEnter(row, col)}*/
                      row={rowIndex}
                      col={tileIndex}
                      mood={currentMood}
                      num={currentDay.getDate()}
                      isSelected={isSelected}
                      isNotActive={false}
                      ></Tile>
                    </td>
                );
              }
              else
              {
                finished = true;
                active = false;
                return (
                  <td>
                    <Tile
                      key={tileIndex}
                      /*onMouseDown={(row, col) => handleMouseDown(row, col)}
                      onMouseUp={(row, col) => handleMouseUp()}
                      onMouseEnter={(row, col) => handleMouseEnter(row, col)}*/
                      row={rowIndex}
                      col={tileIndex}
                      mood={def_mood}
                      num={def_num}
                      isSelected={isSelected}
                      isNotActive={true}
                      ></Tile>
                  </td>
                );
              }
            }
        // return default to suppres warnings
        return <Tile />;})}
      </tr>
      );
  });

  return calendarBody;
}

// get the grid matrix, then assign a tile in each row for each col
function CalendarBody(props) {
  const calendarBody = loadCalendarBodyInfo(props.dateData);

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
          <span id="month-year-text">{monthStrs[props.dateData.month - 1]} {props.dateData.year}</span>
          <button class="arrow-button">&#8680;</button>
        </div>
        <table>
            <CalendarHeader />
            <CalendarBody dateData={props.dateData}/> 
        </table>
      </div>
    );
}

export default Calendar;
