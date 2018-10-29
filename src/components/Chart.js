import React from "react";
import Footer from "./Footer";

const Chart = ({ products }) => (
    <div>
        <ul>
            {products.map(product => (
                <li {...product}/>
            ))}
        </ul>
        <Footer />
    </div>
);

export default Chart;

