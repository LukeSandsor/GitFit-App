import React, {useEffect} from 'react';
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

    return (
        <Select 
            options={foodList}
            placeholder='Select Meal'
            searchable={true}
            closeOnSelect={true}
            onChange={(e) => {
                props.setSelectedFood(e[0].label);
            }}
        />
    );
}

export default FoodSelect;