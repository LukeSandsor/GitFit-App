import React from 'react';
import Select from 'react-dropdown-select';

function FoodSelect(props) {
    return (
        <Select 
            options={props.foodOptions}
            placeholder='Select Meal'
            searchable={true}
            closeOnSelect={true}
            onChange={() => undefined}
        />
    );
}

export default FoodSelect;