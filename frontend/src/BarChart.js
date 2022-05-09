import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function BarChart() {
    const data = {
        labels: ['Protein', 'Carbs', 'Fats'],
        datasets: [
            {
                label: "Target",
                data: [200, 160, 80],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                borderColor: 'white',
                borderWidth: 2,
            },
            {
                label: "Current",
                data: [140, 50, 20],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                borderColor: 'white',
                borderWidth: 2,
            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
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
                text: 'Nutrition Counter',
                color: 'white',
                font: {size: 34}
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

export default BarChart;