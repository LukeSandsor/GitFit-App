import { createContext } from 'react';

const MonthlyMoodDataContext = createContext({
  moodData: {},
  updateMonthlyMoodData: () => {},
});

export default MonthlyMoodDataContext;
