import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import FiltersLayout from '../../containers/FiltersLayout';

const Chart = (props) => {
  let body = null;
  if (!props || !props.products)
      body = <div> Нет данных </div>;
  else {
    const products = props.products;

    const options = {
      chart: {
        type: 'scatter',
      },
      title: {
        text: 'Товары',
      },
      xAxis: {
        title: {
          enabled: true,
          text: 'Feature 1',
        },
      },
      yAxis: {
        title: {
          enabled: true,
          text: 'Feature 2',
        },
      },
      series: products,
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
    };

    body = (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    );
  }

  return (
    <div>
      <FiltersLayout />
      {body}
    </div>
  );
};

export default Chart;
