import React, { Component } from "react";
import FiltersContainer from "../containers/FiltersContainer";
import { getYears } from '../api/services';
import {Filters, setFilter} from "../actions";

class FiltersLayout extends Component {
    constructor() {
        super();
        this.state = {
            years: []
        };
    }

    componentDidMount() {
        this.setState({years: getYears()});


        // this.setState({years: getYears()}, () =>
        //     setFilter(null, this.state.years[0])
        // );
    }


    render() {
        return (

            <div>
                <FiltersContainer
                    filter={Filters.YEAR}
                    filterOptions={this.state.years}
                />
                <FiltersContainer
                    filter={Filters.CATEGORY}
                    filterOptions={["Товар", "Категория товара"]}
                />
            </div>
        );
    }
}

export default FiltersLayout;
