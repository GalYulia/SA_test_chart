import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Filter from '../components/Filter/Filter';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeSelect: selectedItem => dispatch(setFilter(ownProps.filter, selectedItem)),

});

export default connect(
  null,
  mapDispatchToProps,
)(Filter);
