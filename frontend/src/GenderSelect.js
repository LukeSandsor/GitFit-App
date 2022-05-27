import React from 'react';
import Select from 'react-dropdown-select';

function GenderSelect(props) {
    return (
        <Select 
            options={props.genderOptions}
            name='gender'
            placeholder='Select Gender'
            searchable={true}
            closeOnSelect={true}
            onChange={() => undefined}
        />
    );
}

export default GenderSelect;