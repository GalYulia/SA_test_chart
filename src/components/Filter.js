import React from "react";

const Filter = ({ onChangeSelect, filterOptions = [] }) => {
    return (
        <select onChange={e => onChangeSelect(e.target.value)}>
            {filterOptions.map(product => <option key={product.id}>{product}</option>)}
        </select>
    );
};

export default Filter;
