import React, { Component } from 'react';
import { connect } from 'react-redux';
import FiltersContainer from './FiltersContainer';
import { getYears } from '../api/services';
import { CategoryFilter, Filters } from '../constants/index';
import { setFilter } from '../actions/index';


class FiltersLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [],
    };
  }

  componentDidMount() {
    this.setState({ years: getYears() }, () => this.props.dispatch(setFilter(null, this.state.years[0])));
  }

  render() {
    return (
      <span>
        <FiltersContainer
          filter={Filters.YEAR}
          filterOptions={this.state.years}
        />
        <FiltersContainer
          filter={Filters.CATEGORY}
          filterOptions={[CategoryFilter.GOODS, CategoryFilter.CATEGORY_GOODS]}
        />
      </span>
    );
  }
}

export default connect()(FiltersLayout);
