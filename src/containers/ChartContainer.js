import { connect } from "react-redux";
import Chart from "../components/Chart";
import { Filters } from "../actions";

const ChartContainer = (products, filter) => {

    //тут будет меняться стор в зависимости от фильтров (год и категория). Это вью. Здесь уже только отрисовка графика
    // с уже готовыми данными
    console.log('стор', products)
    switch (filter) {
        case Filters.YEAR:
            return products //products.filter(...);
        case Filters.CATEGORY:
            return products;
        default:
            throw new Error("Unknown filter: " + filter);
    }
};

const mapStateToProps = state => ({
    products: ChartContainer(state.products, state.visibilityFilter)
});


export default connect(
    mapStateToProps
)(Chart);
