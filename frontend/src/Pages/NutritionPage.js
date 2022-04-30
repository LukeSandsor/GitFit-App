import React from 'react';
import NavBar from '../NavBar';
import DoughnutChart from '../DoughnutChart';
import './NutritionPage.css'

function NutritionPage() {

    return (
        <div>
            <NavBar />
            <h1>Nutrition Page</h1>
            <div className='doughnut'>
                <DoughnutChart />
            </div>
        </div>
    )
}

export default NutritionPage;