import { connect } from 'react-redux';
import randomColor from 'randomcolor';
import Chart from '../components/Chart/Chart';
import { CategoryFilter } from '../constants';

const getProductsData = (prod) => {
  const data = [];
  let i;
  for (i = 0; i < prod.length; i++) {
    const color = randomColor({
      luminosity: 'dark',
      format: 'rgb',
    });
    data.push({
      data: [[prod[i].points[0], prod[i].points[1]]],
      name: prod[i].name,
      color,
    });
  }
  return data;
};

function getCategoriesData(prod) {
  const categories = ['Feature1 > 150', 'Feature1 < 150', 'Другое'];
  const data = [];

  let i;
  for (i in categories) {
    const color = randomColor({
      luminosity: 'dark',
      format: 'rgb',
    });
    data.push({
      data: [],
      name: categories[i],
      color,
    });
  }

  for (i = 0; i < prod.length; i++) {

    if (prod[i].points[0] > 150)
        data[0].data.push([prod[i].points[0], prod[i].points[1]]);
    else if (prod[i].points[0] < 100)
        data[1].data.push([prod[i].points[0], prod[i].points[1]]);
    else
        data[2].data.push([prod[i].points[0], prod[i].points[1]]);
  }
  return data;
}


const ChartContainer = (products, category) => {
  if (category === null)
      category = CategoryFilter.GOODS;

  switch (category) {
    case CategoryFilter.GOODS:
      return getProductsData(products);
    case CategoryFilter.CATEGORY_GOODS:
      return getCategoriesData(products);
    default:
      throw new Error('Error');
  }
};

const mapStateToProps = state => ({
  products: ChartContainer(state.products, state.chartCategory),
});

export default connect(
  mapStateToProps,
  null,
)(Chart);
