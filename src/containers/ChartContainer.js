import { connect } from "react-redux";
import Chart from "../components/Chart";

const ChartContainer = (products) => {
    // switch (filter) {
    //     case Filters.YEAR:
    //         return ["я год! я год!"];
    //     case Filters.CATEGORY:
    //         return [2, 4, 3];
    //     default:
    //         throw new Error("Unknown filter: " + filter);
    // }

    return products;
};

const mapStateToProps = state => ({
    products: ChartContainer(state.products, state.visibilityFilter)
});


export default connect(
    mapStateToProps
)(Chart);
