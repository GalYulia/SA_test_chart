import { FETCH_PRODUCTS, CHANGE_CATEGORY } from './action-types';
import { getDataByYears } from '../api/services'


//Представим, что мы работаем не с файлом, а шлем запросы к серверу. Запрос содержит параметр - год.

export function setFilter(filter, value) {

    return dispatch =>{
        if (filter === 'YEAR')
        {
            let arr = getDataByYears(value);
            dispatch(fetchProducts(arr));
        }
        else dispatch(changeCategory(filter, value));
    }
}

export const changeCategory = (filter, value) => ({
    type: CHANGE_CATEGORY,
    value
})

export const fetchProducts = products => ({
    type: FETCH_PRODUCTS,
    payload: { products }
})


export const Filters = {
    YEAR: "YEAR",
    CATEGORY: "CATEGORY"
}

