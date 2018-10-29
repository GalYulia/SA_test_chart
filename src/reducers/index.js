import { combineReducers } from 'redux'
import products from './products'
import filter from './filter'

export default combineReducers({
    products,
    visibilityFilter: filter
})
