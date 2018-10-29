import React from "react";

const Filter = ({ onChangeSelect, filterOptions = [] }) => {
    return (
        <select onChange={e => onChangeSelect(e.target.value)} selec>
            {filterOptions.map((product,i) => <option key={i}>{product}</option>)}
        </select>
    );
};

export default Filter;
