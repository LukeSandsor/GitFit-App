import React from 'react';
import Select from 'react-dropdown-select';

function LiftingSelect(props) {
    return (
        <Select 
            options={props.LiftingType}
            name='lift'
            placeholder='Select Type'
            searchable={true}
            closeOnSelect={true}
            onChange={(e) => {
                props.setTypeSelect(e[0].label);
            }}
        />
    );
}

export default LiftingSelect;