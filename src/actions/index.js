import { CHANGE_YEAR, CHANGE_CATEGORY, Filters } from '../constants';
import { getDataByYear } from '../api/services';

// Представим, что мы работаем не с файлом, а с сервером.
export const setFilter = (filter, value) => {
  if (filter === null || filter === Filters.YEAR) {
    const arr = getDataByYear(value);
    return setYearFilter(arr, value);
  }
  return setCategoryFilter(value);
};

export const setCategoryFilter = chartCategory => ({
  type: CHANGE_CATEGORY,
  chartCategory,
});

export const setYearFilter = (products, year) => ({
  type: CHANGE_YEAR,
  products,
  year,
});
