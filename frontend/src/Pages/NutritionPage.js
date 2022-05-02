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
            <div className='macro-table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Macro Nutrient</th>
                            <th>Actual Intake</th>
                            <th>Target Intake</th>
                            <th>Actual Percentage</th>
                            <th>Target Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Protein</td>
                            <td>120 g</td>
                            <td>180 g</td>
                            <td>40 %</td>
                            <td>50 %</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td> 
                            <td>200 g</td>
                            <td>220 g</td>
                            <td>30 %</td>
                            <td>50 %</td>
                        </tr>
                        <tr>
                        <td>Fats</td> 
                            <td>60 g</td>
                            <td>80 g</td>
                            <td>10 %</td>
                            <td>20 %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NutritionPage;