import React from "react";
import FiltersLayout from "./FiltersLayout";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'




const getRandomColor =() => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getData(prod) {
    var data = [];
    var i;
    for (i = 0; i < prod.length; i++) {
        var color = getRandomColor();
        data.push({
            x: prod[i][0],
            y: prod[i][1],
            radius: 4,
            color: color,
            fillColor: color
        });
    }
    return data;
}




const Chart = (props) => {
    let body = null;
    if (!props || !props.products || !props.products.products)
        body = <div> Нет данных </div>
    else {
        const products = props.products.products;

        const options = {
            chart: {
                type: 'scatter'
            },
            title: {
                text: 'My chart'
            },
            series: [{
                name: 'sdsdcs',
                data: getData(products)
            }]
        }

console.log('aaaaa', products)
        body =
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
    }




    return (
        <div>
            <FiltersLayout/>
            {body}
        </div>
    );

}

export default Chart;

