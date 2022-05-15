import React from 'react';
import './Pages/NutritionPage.css'
import TableScrollBar from 'react-table-scrollbar'

function TableHeader() {
    return (
        <thead>
            <tr>
                <th className='table-data'>Food</th>
                <th className='table-data'>Calories</th>
                <th className='table-data'>Protein</th>
                <th className='table-data'>Carbohydrates</th>
                <th className='table-data'>Fats</th>
            </tr>
        </thead>
    )
}

function TableBody(props) {
    const rows = props.foodOptions.map((row) => {
        return (
            <tr>
                <td className='table-data'>{row.food}</td>
                <td className='table-data'>{row.calories}</td>
                <td className='table-data'>{row.protein}</td>
                <td className='table-data'>{row.carbs}</td>
                <td className='table-data'>{row.fats}</td>
            </tr>
        );
    });
    return (
        <tbody>
            {rows}
        </tbody>
    )
}

function NutritionTable (props) {
    return (
        <TableScrollBar rows={6}>
            <table className='macro-table'>
                <TableHeader />
                <TableBody foodOptions={props.foodOptions} />
            </table>
        </TableScrollBar>
    )
}

export default NutritionTable