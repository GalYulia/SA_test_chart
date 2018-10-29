import products from './data'


export const getYears = () =>{
        return products.filter((e, i) => products.findIndex(a => a['year'] === e['year']) === i).map(a => a.year);
}


export const getDataByYears = (year) =>{
    products.filter(function (item) {
        return item.year == year
    });
}
