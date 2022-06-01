import React, {useState, useEffect} from 'react';
import FoodSelect from './FoodSelect';
import NutritionTable from './NutritionTable';
import axios from 'axios';

function MealLogger(props) {
    const [selectedFood, setSelectedFood] = useState("");
    const [quantityEntered, setQuantityEntered] = useState(0);
    
    

    return (
        <div className='food-selecter-container'>
            <div className='log-food'>
                <h2>Log Meals</h2>
                
                <div  className='food-selecter'>
                    <FoodSelect 
                        foodOptions={props.foodOptions}
                        setSelectedFood={setSelectedFood}
                    />
                </div>
                
                <form>
                    <input
                        className='food-input'
                        placeholder='Quantity in grams'
                        type='text'
                        onChange={(e) => setQuantityEntered(e.target.value)}
                    />
                </form>
                <button className='food-button' 
                    onClick={() => {props.submitMeal(selectedFood, quantityEntered)}}>Submit</button>
            </div>
            <div className='nutrition-table'>
                <NutritionTable foodOptions={props.foodOptions} />
            </div>
        </div>
    )
}

export default MealLogger;