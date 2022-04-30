import React from 'react';
import NavBar from '../NavBar';
import DoughnutChart from '../DoughnutChart';
import BarChart from '../BarChart';
import './NutritionPage.css'

function NutritionPage() {

    return (
        <div>
            <NavBar />
            <h1>Nutrition Page</h1>
            <div className='chart-container'>
                <div className='doughnut'>
                    <DoughnutChart />
                </div>
                <div className='bar'>
                    <BarChart />
                </div>
            </div>
        </div>
    )
}

export default NutritionPage;