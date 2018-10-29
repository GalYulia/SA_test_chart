import products from './data'

export const getYears = () =>{
        return products.filter((e, i) => products.findIndex(a => a['year'] === e['year']) === i)
            .map(a => a.year)
            .sort((a,b) => b - a);
}


export const getDataByYears = (year) =>{
    return products.filter(obj => {
        return obj.year === +year
    })
}
