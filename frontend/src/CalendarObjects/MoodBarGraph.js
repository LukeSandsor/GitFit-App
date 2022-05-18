import {Bar} from 'react-chartjs-2';

function MoodBarGraph() {
  
  const data = {
      labels: ['Protein', 'Carbs', 'Fats'],
      datasets: [
        {
            label: "Target",
            data: [200, 160, 80],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
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
                  color: 'white'
              }
          },
          y: {
              grid: {
                  display: false,
                  borderColor: 'white'
              },
              ticks: {
                  color: 'white'
              }
          }
      },
      plugins: {
          title: {
              display: true,
              text: 'Mood Chart',
              color: 'white',
              font: {size: 36}
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

  return (
      <Bar 
          data={data}
          options={options}
      />
  );
}

export default MoodBarGraph;