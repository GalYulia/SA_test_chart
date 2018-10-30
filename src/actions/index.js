import { CHANGE_YEAR, CHANGE_CATEGORY } from '../constants';
import { getDataByYear } from '../api/services'
import { Filters } from '../constants'

//Представим, что мы работаем не с файлом, а с сервером.
export const setFilter = (filter, value) => {

    if (filter === null || filter === Filters.YEAR)
    {
        let arr = getDataByYear(value);
        return setYearFilter(arr, value);
    }
    else
        return setCategoryFilter(value);
}

export const setCategoryFilter = (chartCategory) => ({
    type: CHANGE_CATEGORY,
    chartCategory
})

export const setYearFilter = (products, year) => ({
    type: CHANGE_YEAR,
    products,
    year
})

