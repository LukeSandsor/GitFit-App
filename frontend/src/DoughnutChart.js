import React from 'react';
import {Doughnut} from "react-chartjs-2";
// import {Chart, ArcElement, LineController, LineElement, PointElement, LinearScale, Title, Legend} from 'chart.js'
// Chart.register(ArcElement, LineController, LineElement, PointElement, LinearScale, Title, Legend);
import Chart from 'chart.js/auto'

function DoughnutChart() {
    const data = {
        //labels: ['Current Protein', 'Current Carbs', 'Current Fats', 'Target Protein', 'Target Carbs', 'Target Fats'],
        labels: ['Current Protein', 'Current Carbs', 'Current Fats'],
        datasets: [
            {
                label: "Current Breakdown",
                labels: ['Current Protein', 'Current Carbs', 'Current Fats'],
                data: [0.4, 0.4, 0.2],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverOffset: 10,
                borderWidth: 2,
                legend: {display: true}
            },         
            // {
            //     label: "Target Breakdown",
            //     labels: ['Target Protein', 'Target Carbs', 'Target Fats'],
            //     data: [0.4, 0.4, 0.2],
            //     backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            //     hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            //     hoverOffset: 10,
            //     borderWidth: 2,
            //     legend: {display: true}
            // }
        ]
      };

      const options = {
        plugins: {
            title: {
                display: true,
                text: 'Daily Nutrience',
                color: 'white',
                font: {size: 34},
            },
            legend: {
                display: true,
                position: "top",
                align: "center",
                labels: {
                    color: "white"
                },
                onClick: () => {} 
            }
        },
        maintainAspectRatio: true,
        responsive: true,
      };

    return (
        <Doughnut 
            data={data}
            options={options}
        />
    );
}

export default DoughnutChart;