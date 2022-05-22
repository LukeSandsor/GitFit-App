import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar';
import DoughnutChart from '../DoughnutChart';
import BarChart from '../BarChart';
import './NutritionPage.css';
import PersonalNutritionTable from '../PersonalNutritionTable';
import axios from 'axios';
import MealLogger from '../MealLogger'

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
            
            <MealLogger foodOptions={foodOptions}/>
        </div>
    )
}

export default NutritionPage;