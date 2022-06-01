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
    const [currentUser, setCurrentUser] = useState('');
    const [targetMacros, setTargetMacros] = useState({
        targetProtein: 0,
        targetCarbs: 0,
        targetFats: 0
    });

    async function getFoodOptions() {
        try {
            const response = await axios.get("https://gitfit.lucasreyna.me/nutrition/table");
            //console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    async function getUserNutrition () {
        try {
            const response = await axios.get(`https://gitfit.lucasreyna.me/nutrition?username=${currentUser}`);
            //console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function getTargetNutrition() {
        try {
            const response = await axios.get(`https://gitfit.lucasreyna.me/goals/nutrition?username=${currentUser}`);
            //console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function submitMeal(selectedFood, quantityEntered) {
        try {
            if (selectedFood != "") {
                const response = await axios.put(`https://gitfit.lucasreyna.me/nutrition?username=${currentUser}`, {
                    food: selectedFood,
                    quantity: quantityEntered
                });
                
                getUserNutrition().then(result => {
                    if (result)
                        setUserFoodInfo(result);
                });
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    useEffect(() => {
        setCurrentUser(localStorage.getItem('username'));
    }, []);

    useEffect(() => {
        if (currentUser == '')
            return;

        getTargetNutrition().then(result => {
            if (result)
            setTargetMacros(result)
        });
        getUserNutrition().then(result => {
            if (result)
                setUserFoodInfo(result);
        });
    }, [currentUser]);

    useEffect(() => {
        getFoodOptions().then(result => {
            if (result)
                setFoodOptions(result);
        });
    }, [])

    return (
        <div>
            <NavBar />
            <h1>Nutrition Page</h1>
            <div className='chart-container'>
                <div className='doughnut'>
                    <DoughnutChart userFoodInfo={userFoodInfo} targetMacros={targetMacros}/>
                </div>
                <div className='bar'>
                    <BarChart userFoodInfo={userFoodInfo} targetMacros={targetMacros}/>
                </div>
            </div>
            <div className='macro-table-container'>
                <PersonalNutritionTable userFoodInfo={userFoodInfo} targetMacros={targetMacros}/>
            </div>
            
            <MealLogger 
                foodOptions={foodOptions} 
                currentUser={currentUser}
                submitMeal={(selectedFood, quantityEntered) => submitMeal(selectedFood, quantityEntered)}
            />
        </div>
    )
}

export default NutritionPage;