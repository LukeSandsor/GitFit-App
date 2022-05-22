import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar';
import DoughnutChart from '../DoughnutChart';
import BarChart from '../BarChart';
import './NutritionPage.css';
import FoodSelect from '../FoodSelect';
import NutritionTable from '../NutritionTable';
import axios from 'axios';

function NutritionPage() {
    const [foodOptions, setFoodOptions] = useState([]);
    const [userFoodInfo, setUserFoodInfo] = useState({});

    async function getFoodOptions() {
        try {
            const response = await axios.get("https://gitfit.lucasreyna.me/nutrition/table");
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    useEffect(() => {
        getFoodOptions().then(result => {
            if (result)
                setFoodOptions(result);
        })
    });

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
                <table className='macro-table'>
                    <thead>
                        <tr>
                            <th className='table-data'>Macro Nutrient</th>
                            <th className='table-data'>Actual Intake</th>
                            <th className='table-data'>Target Intake</th>
                            <th className='table-data'>Actual Percentage</th>
                            <th className='table-data'>Target Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='table-data'>Protein</td>
                            <td className='table-data'>120 g</td>
                            <td className='table-data'>180 g</td>
                            <td className='table-data'>40 %</td>
                            <td className='table-data'>50 %</td>
                        </tr>
                        <tr>
                            <td className='table-data'>Carbohydrates</td> 
                            <td className='table-data'>200 g</td>
                            <td className='table-data'>220 g</td>
                            <td className='table-data'>30 %</td>
                            <td className='table-data'>50 %</td>
                        </tr>
                        <tr>
                            <td className='table-data'>Fats</td> 
                            <td className='table-data'>60 g</td>
                            <td className='table-data'>80 g</td>
                            <td className='table-data'>10 %</td>
                            <td className='table-data'>20 %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='food-selecter-container'>
                <div className='log-food'>
                    <h2>Log Meals</h2>
                    
                    <div  className='food-selecter'>
                        <FoodSelect foodOptions={foodOptions}/>
                    </div>
                    
                    <form>
                        <input
                            className='food-input'
                            placeholder='Quantity in grams'
                            type='text'
                        />
                    </form>
                    <button className='food-button'>Submit</button>
                </div>
                <div className='nutrition-table'>
                    <NutritionTable foodOptions={foodOptions} />
                </div>
            </div>
        </div>
    )
}

export default NutritionPage;