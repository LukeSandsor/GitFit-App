import React from 'react';
import { Doughnut } from 'react-chartjs-2';
// import {Chart, ArcElement, LineController,
// LineElement, PointElement, LinearScale, Title, Legend} from 'chart.js'
// Chart.register(ArcElement, LineController, LineElement, PointElement,LinearScale, Title, Legend);
import Chart from 'chart.js/auto';

Chart.overrides.doughnut.plugins.tooltip.callbacks.label = function (context) {
  return `${context.parsed}%`;
};
Chart.overrides.doughnut.plugins.tooltip.callbacks.title = function (context) {
  console.log(context);
  return `${context[0].dataset.label} ${context[0].label}`;
};
Chart.overrides.doughnut.plugins.tooltip.titleFont = { weight: 'bold', size: 16 };
Chart.overrides.doughnut.plugins.tooltip.titleAlign = 'center';
Chart.overrides.doughnut.plugins.tooltip.bodyFont = { weight: 'bold', size: 14 };
Chart.overrides.doughnut.plugins.tooltip.bodyAlign = 'center';

function DoughnutChart(props) {
  const currentTotal = props.userFoodInfo.protein + props.userFoodInfo.carbs + props.userFoodInfo.fats
  const currentProtein = Math.round(props.userFoodInfo.protein / currentTotal * 100);
  const currentCarbs = Math.round(props.userFoodInfo.carbs / currentTotal * 100);
  const currentFats = Math.round(props.userFoodInfo.fats / currentTotal * 100);

  const targetTotal = props.targetMacros.targetProtein + props.targetMacros.targetCarbs + props.targetMacros.targetFats;
  const targetProtein = Math.round(props.targetMacros.targetProtein / targetTotal * 100);
  const targetCarbs = Math.round(props.targetMacros.targetCarbs / targetTotal * 100);
  const targetFats = Math.round(props.targetMacros.targetFats / targetTotal * 100);

  const data = {
    labels: ['Protein', 'Carbs', 'Fats'],
    datasets: [
      {
        label: 'Current',
        data: [currentProtein, currentCarbs, currentFats],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 10,
        borderWidth: 2,
        legend: { display: true },
      },
      {
        label: 'Target',
        data: [targetProtein, targetCarbs, targetFats],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 10,
        borderWidth: 2,
        legend: { display: true },
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Nutrition Breakdown',
        color: 'white',
        font: { size: 34 },
      },
      legend: {
        display: true,
        position: 'top',
        align: 'center',
        labels: {
          color: 'white',
        },
        onClick: () => {},
      },
      maintainAspectRatio: false,
      responsive: true,
    },
  };

  return (
        <Doughnut
            data={data}
            options={options}
        />
  );
}

export default DoughnutChart;
