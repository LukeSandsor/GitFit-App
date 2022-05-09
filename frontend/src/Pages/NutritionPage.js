import React from 'react';
import NavBar from '../NavBar';
import DoughnutChart from '../DoughnutChart';
import BarChart from '../BarChart';
import './NutritionPage.css'
import TableScrollBar from 'react-table-scrollbar';
import FoodSelect from '../FoodSelect.js'

function NutritionPage() {

    const foodOptions = [
        {
            label: 'Minced Beef',
            value: {
                calories: 337,
                protein: 30,
                carbs: 0,
                fats: 24
            }
        },
        {
            label: 'Steak',
            value: {
                calories: 202,
                protein: 35,
                carbs: 0,
                fats: 6.8
            }
        },
        {
            label: 'Chicken - Light Meat',
            value: {
                calories: 159,
                protein: 35,
                carbs: 0,
                fats: 1.7
            }
        },
        {
            label: 'Chicken - Dark Meat',
            value: {
                calories: 156,
                protein: 31,
                carbs: 0,
                fats: 4.2
            }
        },
        {
            label: 'Pork',
            value: {
                calories: 293,
                protein: 28,
                carbs: 0,
                fats: 20
            }
        },
        {
            label: 'Cod',
            value: {
                calories: 113,
                protein: 26,
                carbs: 0,
                fats: 0.9
            }
        }
    ]

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
            <div className='food-selecter-container'>
                <div className='food-selecter'>
                    <FoodSelect foodOptions={foodOptions}/>
                </div>
            </div>
        </div>
    )
}

export default NutritionPage;