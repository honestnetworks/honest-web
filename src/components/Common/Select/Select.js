import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'Jersey City', label: 'Jersey City' },
    { value: 'Flushing Ave', label: 'Flushing Ave' },
    { value: 'East Hanover', label: 'East Hanover' }
];

const CustomSelect = (props) => {

    const handleChange = (item)=>{
        props.filterBuildings(item)
    };

    return <Select options={options} onChange={(item)=>handleChange(item)} placeholder={"Search Building Name"}/>
};

export default CustomSelect;