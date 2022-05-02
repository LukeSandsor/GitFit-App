import React, {useState, useEffect, useContext} from 'react'
import './Calendar.css'
import Tile from './Tile/Tile';
import exampleDateData from './ExampleCalendarData.json'; // For testing purposes
import CalendarDateInfoContext from '../context/calendar-date.context';

const NUM_COLS = 7; // seven days in a week
const NUM_ROWS = 6; // at most 6 weeks to display
const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const monthStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// sets up the days of the week in table format
function CalendarHeader() {
  const dayRow = daysOfWeek.map((value, index) => {
      return (<th key={index} className="day-week-text">{value}</th>);
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

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState((new Date()).getMonth());
  const [currentYear, setCurrentYear] = useState((new Date()).getFullYear());
  const [selectedTile, setSelectedTile] = useState();
  const [calendarBody, setCalendar] = useState();
  let gridOfInfo = []; // makes grid accessible in other functions

  const { updateDay } = useContext(CalendarDateInfoContext);

  // runs on first render, and any time month or selected tile is changed
  useEffect(() => {
    setCalendar(loadCalendarBodyInfo(exampleDateData));
  }, [currentMonth, selectedTile]);

  function UpdateCalendar(incrementMonth) {
    // in case value > 12
    const numYears = Math.floor(Math.abs(incrementMonth / 12)) + 1;
    const newMonthVal = currentMonth + incrementMonth;

    if (newMonthVal < 0) {
      // needed for positive modulo result
      setCurrentMonth(((newMonthVal % 12) + 12) % 12);
      setCurrentYear(currentYear - numYears); 
    }
    else if (newMonthVal > 11) {
      setCurrentMonth(newMonthVal % 12);
      setCurrentYear(currentYear + numYears); 
    }
    else {
      setCurrentMonth(newMonthVal);
    }

    // reset the currently selected tile
    if (selectedTile)
        selectedTile.className = 'tile ';
    setSelectedTile(undefined);
    updateDay({}); // reset Daily Breakdown info when switching
  }

  function handleMouseDown(row, col) {
    let tileObject = document.getElementById(`tile-${row}-${col}`);

    // make sure tile is active and not already selected
    // set tile Object as selected and change its class
    if (tileObject.classList.length === 1) {
      // change previous tile to a default active tile
      // make sure it's not undefined
      if (selectedTile)
        selectedTile.className = 'tile ';
      setSelectedTile(tileObject);
      tileObject.className += 'selected-tile';

      // set daily info
      console.log(gridOfInfo);
      let getInfo = gridOfInfo[row][col];
      console.log(getInfo);
      updateDay(getInfo); // this will set the context for calenderPage
    }
  }

  // Create a matrix of row length and col length
  function initializeGrid() {
    const grid = [];
    for (let row = 0; row < NUM_ROWS; row++) {
      const currentRow = [];
      for (let col = 0; col < NUM_COLS; col++) {
          const currentTile = {
            row, // row value, set later
            col, // col value, set later
            def_mood: "", // mood value
            def_num: "", // num value of tile, set later
            onMouseDown: (row, col) => handleMouseDown(row, col),
            isNotActive: true, // set all tiles to default
          };
          currentRow.push(currentTile);
      }
      grid.push(currentRow);
    }

    return grid;
  }

  function loadCalendarBodyInfo(dateData) {
    let currentMood = "";
    let currentDay = new Date(currentYear, currentMonth, 1);

    let firstDayOfWeekIndex = currentDay.getDay(); // 0 to 6, sunday is first
    let active = false;
    let finished = false;

    const grid = initializeGrid();
    let newInfoGrid = [];
    let newInfoRow = undefined;
    const calendarBody = grid.map((row, rowIndex) => {
      // skip the first iteration, newInfoRow is undefined
      if (newInfoRow) {
        newInfoGrid.push(newInfoRow);
      }
      newInfoRow = [];

      // return from the column map, whole row
      return (
        <tbody>
          <tr key={rowIndex}>
            {row.map((tile, tileIndex) => {
              let currentInfo = { // set all info for Tile
                calLost: "N/A",
                calCons: "N/A",
                weight: "N/A",
                numWork: "N/A",
                numStep: "N/A",
                mood: "N/A"
              }

              // return from the row map, single Tile
              const {onMouseDown, def_mood, def_num} = tile; // is from the currentTile Object

              // wait until proper day of the week
              if (!active) {
                // check day of the week before index
                if (firstDayOfWeekIndex === tileIndex && !finished)
                {
                  // needed to offset currentDay to 1 
                  currentDay.setDate(currentDay.getDate() - 1);
                  active = true;
                }
                else {
                  newInfoRow.push({}); // won't be accessed anyway

                  // return blank tile
                  return (
                    <td>
                      <Tile
                        key={tileIndex}
                        onMouseDown={onMouseDown}
                        row={rowIndex}
                        col={tileIndex}
                        mood={def_mood}
                        num={def_num}
                        isNotActive={true}
                        ></Tile>
                    </td>
                  );
                }
              }

              if (active) {
                currentDay.setDate(currentDay.getDate() + 1);
                if (currentMonth === currentDay.getMonth()) {
                  const dateText = `${monthStrs[currentMonth]} ${currentDay.getDate()}, ${currentYear}`;
                  const thisDateData = dateData[currentYear][currentMonth][currentDay.getDate()];
                  currentInfo.dateString = dateText;

                  // check if this day has a mood loggged
                  if (thisDateData !== undefined) {
                    currentMood = thisDateData.mood; // may need to check if undefined
                    
                    // merge the two objects, if data exists it'll overwrite the 'N/A'
                    currentInfo = {...currentInfo, ...thisDateData};
                    newInfoRow.push(currentInfo);
                  }
                  else {
                    currentMood = "";
                    newInfoRow.push(currentInfo); // empty info
                  }

                  return (
                    <td>
                      <Tile
                        key={tileIndex}
                        onMouseDown={onMouseDown}
                        row={rowIndex}
                        col={tileIndex}
                        mood={currentMood}
                        num={currentDay.getDate()}
                        isNotActive={false}
                        ></Tile>
                      </td>
                  );
                }
                else // return blank tile when loading ends
                {
                  newInfoRow.push({});
                  finished = true;
                  active = false;
                  return (
                    <td>
                      <Tile
                        key={tileIndex}
                        onMouseDown={onMouseDown}
                        row={rowIndex}
                        col={tileIndex}
                        mood={def_mood}
                        num={def_num}
                        isNotActive={true}
                        ></Tile>
                    </td>
                  );
                }
              }
              // return default to suppres warnings
              return <Tile />;})
            }
          </tr>
        </tbody>
      );
    });
    newInfoGrid.push(newInfoRow); // must push last row
    gridOfInfo = newInfoGrid; // set component variable to newGrid

    return calendarBody;
  }

  return (
    <div className='calendar'>
        <div className="calendar-top">
          <button className="arrow-button" onClick={() => UpdateCalendar(-1)}>&#8678;</button>
          <span id="month-year-text">{monthStrs[currentMonth]} {currentYear}</span>
          <button className="arrow-button" onClick={() => UpdateCalendar(1)}>&#8680;</button>
        </div>
        <table>
            <CalendarHeader />
            {calendarBody}
        </table>
    </div>
  );
}

export default Calendar;
