import { connect } from "react-redux";
import Chart from "../components/Chart";

const ChartContainer = (props) => {
    // switch (filter) {
    //     case Filters.YEAR:
    //         return ["я год! я год!"];
    //     case Filters.CATEGORY:
    //         return [2, 4, 3];
    //     default:
    //         throw new Error("Unknown filter: " + filter);
    // }

    return props;
};

const mapStateToProps = state => ({
    products: ChartContainer(state.products, state.chartCategory)
});


export default connect(
    mapStateToProps
)(Chart);
