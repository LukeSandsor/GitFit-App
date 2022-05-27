import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Calendar.css';
import Tile from './Tile/Tile.jsx';
// import exampleDateData from './ExampleCalendarData.json'; // For testing purposes
import CalendarDateInfoContext from '../context/calendar-date.context';
import MonthlyMoodDataContext from '../context/calendar-mood.context';

const NUM_COLS = 7; // seven days in a week
const NUM_ROWS = 6; // at most 6 weeks to display
const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const monthStrs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DEFAULT_EMPTY = 'N/A';

// sets up the days of the week in table format
function CalendarHeader() {
  const dayRow = daysOfWeek.map((value, index) => (<th key={index} className="day-week-text">{value}</th>));
  return (
      <thead>
        <tr>
          {dayRow}
        </tr>
      </thead>
  );
}

function Calendar() {
  const [userData, setUserData] = useState({}); // stores user data from get
  const [currentMonth, setCurrentMonth] = useState((new Date()).getMonth());
  const [currentYear, setCurrentYear] = useState((new Date()).getFullYear());
  const [currentUser, setCurrentUser] = useState('');
  const [selectedTile, setSelectedTile] = useState();
  const [calendarBody, setCalendar] = useState();
  const [calendarClassname, setCalendarClass] = useState('');
  let gridOfInfo = []; // makes grid accessible in other functions

  const { updateDay } = useContext(CalendarDateInfoContext);
  const { updateMonthlyMoodData } = useContext(MonthlyMoodDataContext);

  function collectMoodsForMonth()
  {
    let moodData = {};

    /// iterate through grid of info
    for (let row = 0; row < gridOfInfo.length; row++) {
      for (let col = 0; col < gridOfInfo[row].length; col++) {
        // check if mood exists
        if (gridOfInfo[row][col]['mood'])
        {
          // grab mood
          const newMood = gridOfInfo[row][col]['mood'];

          // check if mood is already in the object
          if (newMood !== DEFAULT_EMPTY) {
            if (moodData[newMood]) {
              moodData[newMood] += 1;
            }
            else {
              moodData[newMood] = 1;
            }
          }
        }
      }
    }

    return moodData;
  }

  function UpdateCalendar(incrementMonth) {
    // in case value > 12
    const numYears = Math.floor(Math.abs(incrementMonth / 12)) + 1;
    const newMonthVal = currentMonth + incrementMonth;

    if (newMonthVal < 0) {
      // needed for positive modulo result
      setCurrentMonth(((newMonthVal % 12) + 12) % 12);
      setCurrentYear(currentYear - numYears);
    } else if (newMonthVal > 11) {
      setCurrentMonth(newMonthVal % 12);
      setCurrentYear(currentYear + numYears);
    } else {
      setCurrentMonth(newMonthVal);
    }

    // reset the currently selected tile
    if (selectedTile) 
      selectedTile.className = 'tile ';

    setSelectedTile(undefined);
    updateDay({}); // reset Daily Breakdown info when switching
  }

  function handleMouseDown(row, col) {
    const tileObject = document.getElementById(`tile-${row}-${col}`);

    // make sure tile is active and not already selected
    // set tile Object as selected and change its class
    if (tileObject.classList.length === 1) {
      // change previous tile to a default active tile
      // make sure it's not undefined
      if (selectedTile) selectedTile.className = 'tile ';
      
      setSelectedTile(tileObject);
      tileObject.className += 'selected-tile';

      // set daily info
      const getInfo = gridOfInfo[row][col];
      if (getInfo)
        updateDay(getInfo); // this will set the context for calenderPage
    }
  }

  // Create a matrix of row length and col length
  function initializeGrid() {
    const grid = [];
    for (let row = 0; row < NUM_ROWS; row += 1) {
      const currentRow = [];
      for (let col = 0; col < NUM_COLS; col += 1) {
        const currentTile = {
          row, // row value, set later
          col, // col value, set later
          defMood: '', // mood value
          defNum: '', // num value of tile, set later
          onMouseDown: (r, c) => handleMouseDown(r, c),
          isNotActive: true, // set all tiles to default
        };
        currentRow.push(currentTile);
      }
      grid.push(currentRow);
    }

    return grid;
  }

  function loadCalendarBodyInfo(dateData) {
    let currentMood = '';
    const currentDay = new Date(currentYear, currentMonth, 1);

    const firstDayOfWeekIndex = currentDay.getDay(); // 0 to 6, sunday is first
    let active = false;
    let finished = false;

    const grid = initializeGrid();
    const newInfoGrid = [];
    let newInfoRow;
    const newCalendarBody = grid.map((row, rowIndex) => {
      // skip the first iteration, newInfoRow is undefined
      if (newInfoRow) {
        newInfoGrid.push(newInfoRow);
      }
      newInfoRow = [];

      // return from the column map, whole row
      return (
        <tbody key={rowIndex}>
          <tr>
            {row.map((tile, tileIndex) => {
              let currentInfo = { // set all info for Tile
                calLost: DEFAULT_EMPTY,
                calCons: DEFAULT_EMPTY,
                weight: DEFAULT_EMPTY,
                numWork: DEFAULT_EMPTY,
                numStep: DEFAULT_EMPTY,
                mood: DEFAULT_EMPTY,
              };

              // return from the row map, single Tile
              const { onMouseDown, defMood, defNum } = tile; // is from the currentTile Object

              // wait until proper day of the week
              if (!active) {
                // check day of the week before index
                if (firstDayOfWeekIndex === tileIndex && !finished) {
                  // needed to offset currentDay to 1
                  currentDay.setDate(currentDay.getDate() - 1);
                  active = true;
                } else {
                  newInfoRow.push({}); // won't be accessed anyway

                  // return blank tile
                  return (
                    <td>
                      <Tile
                        key={tileIndex}
                        onMouseDown={onMouseDown}
                        row={rowIndex}
                        col={tileIndex}
                        mood={defMood}
                        num={defNum}
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
                  if (dateData.years[currentYear] === undefined) {
                    // year does not exist for user
                    setCalendarClass('invalid'); // changes background color of calendar
                    updateDay({ dateString: 'No data for this year!' });
                    return <td>
                            <Tile
                              key={tileIndex}
                              onMouseDown={onMouseDown}
                              row={rowIndex}
                              col={tileIndex}
                              mood={currentMood}
                              num={currentDay.getDate()}
                              isNotActive={false}
                              ></Tile>
                            </td>;
                  }
                  setCalendarClass('');
                  const thisDateData = dateData.years[currentYear][currentMonth][currentDay.getDate()];
                  currentInfo.dateString = dateText;

                  // check if this day has a mood loggged
                  if (thisDateData !== undefined) {
                    currentMood = thisDateData.mood; // may need to check if undefined

                    // merge the two objects, if data exists it'll overwrite the 'N/A'
                    currentInfo = { ...currentInfo, ...thisDateData };
                    newInfoRow.push(currentInfo);
                  } else {
                    currentMood = '';
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
                        mood={defMood}
                        num={defNum}
                        isNotActive={true}
                        ></Tile>
                    </td>
                );
              }
              // return default to suppres warnings
              return <Tile key="invalid"/>;
            })
            }
          </tr>
        </tbody>
      );
    });
    newInfoGrid.push(newInfoRow); // must push last row
    gridOfInfo = newInfoGrid; // set component variable to newGrid

    // send moodData to summaryPage through context
    updateMonthlyMoodData(collectMoodsForMonth());

    return newCalendarBody;
  }

  async function getCalendarFromUser(username) {
    try {
      // cache this stuff later, don't need to get the whole calendar every time
      const response = await axios.get(`https://gitfit.lucasreyna.me/calendar?user=${username}`);

      if (response.status === 200) {
        return response.data;
      }
      // else handle user not being in the calendar db
      // most likely a 204 response
      return { years: {} };
    } catch (error) {
      // possible do something with no advice
      // console.log(error);
      return false;
    }
  }

  useEffect(() => {
    setCurrentUser(localStorage.getItem('username'));
  }, []);

  // runs on first render, and any time month or selected tile is changed
  useEffect(() => {
    // before data is initialized
    if (Object.keys(userData).length === 0) {
        getCalendarFromUser(currentUser).then((result) => {
          if (result) {
            setCalendar(loadCalendarBodyInfo(result));
          }
          setUserData(result); // cache the user data
      });
    }
    else if (userData)
      setCalendar(loadCalendarBodyInfo(userData));
  }, [currentUser, currentMonth, selectedTile]);

  return (
    <div className={`calendar ${calendarClassname}`}>
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
