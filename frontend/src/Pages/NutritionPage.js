import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar';
import DoughnutChart from '../DoughnutChart';
import BarChart from '../BarChart';
import './NutritionPage.css';
import FoodSelect from '../FoodSelect';
import NutritionTable from '../NutritionTable';
import PersonalNutritionTable from '../PersonalNutritionTable';
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

    async function getUserNutrition () {
        try {
            const response = await axios.get("https://gitfit.lucasreyna.me/nutrition?username=nutritionTest");
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    useEffect(() => {
        getFoodOptions().then(result => {
            if (result)
                setFoodOptions(result);
        });

        getUserNutrition().then(result => {
            if (result)
                setUserFoodInfo(result);
        });
    });

    return (
        <div>
            <NavBar />
            <h1>Nutrition Page</h1>
            <div className='chart-container'>
                <div className='doughnut'>
                    <DoughnutChart userFoodInfo={userFoodInfo}/>
                </div>
                <div className='bar'>
                    <BarChart userFoodInfo={userFoodInfo}/>
                </div>
            </div>
            <div className='macro-table-container'>
                <PersonalNutritionTable userFoodInfo={userFoodInfo}/>
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