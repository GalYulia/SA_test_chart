import { Filters } from "../actions";

const filter = (state = Filters.YEAR, action) => {
    console.log("я редьюсер - тип комбобокса:", action.filter);
    console.log("val", action.value);
    switch (action.type) {
        case "SET_FILTER":
            return action.filter;
        default:
            return state;
    }
};

export default filter;
