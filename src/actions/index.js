import { FETCH_PRODUCTS, CHANGE_CATEGORY } from './action-types';
import { getDataByYears } from '../api/services'


//Представим, что мы работаем не с файлом, а с сервером.
export function setFilter(filter, value) {

    if (filter === null || filter === 'YEAR')
    {
        let arr = getDataByYears(value);
        return fetchProducts(arr);
    }
    else
        return changeCategory(filter, value);
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

