
const initialState = {
    products: [],
    chartCategory: null,
    year: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_YEAR':
            return{
                ...state,
                products: action.products.map((a) => {
                    return {
                        points: [a.feature1, a.feature2],
                        name: a.name
                    }
                }),
                year: action.year,
            }
        case "CHANGE_CATEGORY":
            return{
                ...state,
                chartCategory: action.chartCategory,
        }
        default:
            return state
    }
}

export default rootReducer
