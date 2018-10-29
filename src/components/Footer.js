import React from "react";
import FiltersContainer from "../containers/FiltersContainer";
import { Filters } from "../actions";

const Footer = () => (
    <div>
        <FiltersContainer
            filter={Filters.YEAR}
            filterOptions={["2018", "2017"]}
        />
        <FiltersContainer
            filter={Filters.CATEGORY}
            filterOptions={["товар", "категория товара"]}
        />
    </div>
);

export default Footer;
