const products = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS': //вернулся products
            return{
                ...state,
                products: action.payload.products.map((a) => {
                    return {
                        points: [a.feature1, a.feature2],
                        name: a.name
                    }
                })
            }
        case 'CHANGE_CATEGORY': //вернулось value
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        default:
            return state
    }
}

export default products
