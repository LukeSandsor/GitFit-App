import React from 'react';
import './Pages/NutritionPage.css'
import TableScrollBar from 'react-table-scrollbar'

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Food</th>
                <th>Calories</th>
                <th>Protein</th>
                <th>Carbohydrates</th>
                <th>Fats</th>
            </tr>
        </thead>
    )
}

function TableBody(props) {
    const rows = props.foodOptions.map((row) => {
        return (
            <tr>
                <td>{row.label}</td>
                <td>{row.value.calories}</td>
                <td>{row.value.protein}</td>
                <td>{row.value.carbs}</td>
                <td>{row.value.fats}</td>
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
        <TableScrollBar rows={3}>
            <table>
                <TableHeader />
                <TableBody foodOptions={props.foodOptions} />
            </table>
        </TableScrollBar>
    )
}

export default NutritionTable