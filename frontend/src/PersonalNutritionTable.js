import React from 'react';
import './Pages/NutritionPage.css';

function PersonalNutritionTable() {
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
    )
}

export default PersonalNutritionTable;