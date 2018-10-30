import products from './data.jsx'

export const getYears = () =>{
        return products.filter((e, i) => products.findIndex(a => a['year'] === e['year']) === i)
            .map(a => a.year)
            .sort((a,b) => b - a);
}


export const getDataByYear = (year) => {
    return products.filter(obj => {
        return obj.year === +year
    })
}
