import { Filters } from "../actions";

const filter = (state = Filters.YEAR, action) => {
    console.log("тип комбобокса:", action.filter);
    console.log("значение комбобокса:", action.value);
    switch (action.type) {
        case "CHANGE_CATEGORY":
            return action.filter;
        default:
            return state;
    }
};

export default filter;
