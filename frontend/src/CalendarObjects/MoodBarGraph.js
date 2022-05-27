import React from 'react';
import {Bar} from 'react-chartjs-2';

const colorsForEmoji = {'😡': 'salmon', '😢': 'lightblue', '🤒': 'green', '😐': 'gray', '🙂': 'lightyellow', '🤩': 'pink'};

function MoodBarGraph(props) {

  const data = {
      labels: Object.keys(props.moodData),
      datasets: [
        {
          label: " Days",
          data: Object.values(props.moodData),
          backgroundColor: Object.keys(props.moodData).map( (key) => colorsForEmoji[key] ),
          borderColor: 'white',
          borderWidth: 2,
        }
      ]
  }

  const options = {
      maintainAspectRatio: true,
      scales: {
          x: {
              grid: {
                  display: false,
                  borderColor: 'white'
              },
              ticks: {
                  font: {
                    size: 36
                  },
                  color: 'white'
              }
          },
          y: {
              grid: {
                  display: true,
                  borderColor: 'white'
              },
              ticks: {
                  font: {
                    size: 20
                  },
                  precision: 0,
                  color: 'white'
              }
          }
      },
      plugins: {
          title: {
              display: true,
              text: 'Mood Chart',
              color: 'white',
              font: {size: 24}
          },
          legend: {
              display: false,
              position: 'top',
              align: 'center',
              labels: {
                  color: 'white'
              }
          }
      }
  }

  console.log(props);

  return (
      <Bar 
          data={data}
          options={options}
      />
  );
}

export default MoodBarGraph;