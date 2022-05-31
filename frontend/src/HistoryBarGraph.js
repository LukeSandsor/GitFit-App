import React from 'react';
import {Bar} from 'react-chartjs-2';
//eslint-disable-next-line
import Chart from 'chart.js/auto';

function getWeights(workouts) {
    let weights = new Array();
    for(let i = 0; i < workouts.length; i++) {
        weights.push(workouts[i].weight)
    }
    return weights;
}

function getDates(workouts) {
    let dates = new Array();
    for(let i = 0; i < workouts.length; i++) {
        dates.push(`${workouts[i].month}/${workouts[i].date}/${workouts[i].year}`)
    }
    return dates
}


function HistoryBarGraph(props) {
    const weights = getWeights(props.workouts);
    const dates = getDates(props.workouts);
    const data = {
        labels: dates,
        datasets: [
            {
                label: " Weight",
                data: weights,
                backgroundColor: ["magenta", "cyan", "lightgreen"],
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
                    display: true,
                    color: 'white',
                    borderColor: 'white'
                },
                ticks: {
                    color: 'white'
                }
            },
            y: {
                grid: {
                    display: true,
                    color: 'white',
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
                text: 'Workout Tracker',
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

export default HistoryBarGraph;