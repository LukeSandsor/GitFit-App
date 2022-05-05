import { createContext } from 'react';

const CalendarDateInfoContext = createContext({
  dailyInfo: {},
  updateDay: () => {},
});

export default CalendarDateInfoContext;
