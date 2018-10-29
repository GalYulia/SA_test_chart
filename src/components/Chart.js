import React from "react";
import FiltersLayout from "./FiltersLayout";

const Chart = ({ products }) => (
    <div>
        <ul>
            {products.map(product => (
                <li {...product}/>
            ))}
        </ul>
        <FiltersLayout />
    </div>
);

export default Chart;

