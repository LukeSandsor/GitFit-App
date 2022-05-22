import React from 'react';
import './Pages/NutritionPage.css';

function PersonalNutritionTable(props) {
    const protein = `${Math.round(props.userFoodInfo.protein * 100) / 100} g`;
    const carbs = `${Math.round(props.userFoodInfo.carbs * 100) / 100} g`;
    const fats = `${Math.round(props.userFoodInfo.fats * 100) / 100} g`;
    
    const total = props.userFoodInfo.protein + props.userFoodInfo.carbs + props.userFoodInfo.fats;
    const proteinPercentage = `${Math.round(props.userFoodInfo.protein / total * 10000) / 100} %`;
    const carbPercentage = `${Math.round(props.userFoodInfo.carbs / total * 10000) / 100} %`;
    const fatPercentage = `${Math.round(props.userFoodInfo.fats / total * 10000) / 100} %`;

    return (
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
                            <td className='table-data'>{protein}</td>
                            <td className='table-data'>180 g</td>
                            <td className='table-data'>{proteinPercentage}</td>
                            <td className='table-data'>50 %</td>
                        </tr>
                        <tr>
                            <td className='table-data'>Carbohydrates</td> 
                            <td className='table-data'>{carbs}</td>
                            <td className='table-data'>220 g</td>
                            <td className='table-data'>{carbPercentage}</td>
                            <td className='table-data'>50 %</td>
                        </tr>
                        <tr>
                            <td className='table-data'>Fats</td> 
                            <td className='table-data'>{fats}</td>
                            <td className='table-data'>80 g</td>
                            <td className='table-data'>{fatPercentage}</td>
                            <td className='table-data'>20 %</td>
                        </tr>
                    </tbody>
                </table>
    )
}

export default PersonalNutritionTable;