import { connect } from "react-redux";
import Chart from "../components/Chart";
import {CategoryFilter} from "../constants";
import randomColor from'randomcolor';

// const getRandomColor =() => {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

const getProducts = (prod) => {
    var data = [];
    var i;
    for (i = 0; i < prod.length; i++) {
        var color = randomColor({
            luminosity: 'dark',
            format: 'rgb'
        });
        data.push({
            data: [[prod[i].points[0],prod[i].points[1]]],
            name: prod[i].name,
            color: color
        });
    }
    return data;
}


const createSeries =() =>{
    return {

    }
}

function getCategoriesData(prod) {
    var categories = ["Feature1 > 150", "Feature1 < 150", "Другое"];
    var data = [];

    var i;
    for (i in categories) {
        var color =  randomColor({
            luminosity: 'dark',
            format: 'rgb'
        });
        data.push({
            data: [],
            name: categories[i],
            color: color
        })
    }

    for (i = 0; i < prod.length; i++) {
        if (prod[i].points[0] > 150)
            data[0].data.push([prod[i].points[0],prod[i].points[1]])
        else if (prod[i].points[0] < 100)
            data[1].data.push([prod[i].points[0],prod[i].points[1]])
        else
            data[2].data.push([prod[i].points[0],prod[i].points[1]])
    }
    return data;
}


const ChartContainer = (products, category) => {
    if (category === null)
        category = CategoryFilter.GOODS;

    switch (category) {
        case CategoryFilter.GOODS:
            return getProducts(products);
        case CategoryFilter.CATEGORY_GOODS:
            return getCategoriesData(products);
        default:
            throw new Error("Error");
    }
};

const mapStateToProps = state => ({
    products: ChartContainer(state.products, state.chartCategory)
});


export default connect(
    mapStateToProps
)(Chart);
