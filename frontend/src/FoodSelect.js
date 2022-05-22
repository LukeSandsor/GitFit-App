import React from 'react';
import Select from 'react-dropdown-select';

function FoodSelect(props) {
    const foodList = props.foodOptions.map((item) => {
        return (
            {
                label: item.food,
                value: item
            }
        )
    });

    console.log(foodList);

    return (
        <Select 
            options={foodList}
            placeholder='Select Meal'
            searchable={true}
            closeOnSelect={true}
            onChange={() => undefined}
        />
    );
}

export default FoodSelect;