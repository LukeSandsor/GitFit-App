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
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
            }
        ]
    }

    return (
        <Bar data={data} />
    );
}

export default BarChart;