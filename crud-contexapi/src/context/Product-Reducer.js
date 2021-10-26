const Reducer = (state, action) => {
    switch (action.type) {
        case "START":
            return {
                ...state,
                loading: true,
                error: false,
                errorMessage: null,
            };
        case "ERROR":
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: state.errorMessage,
            };
        case "FETCH_PRODUCTS":
            // console.log("prd: ", action.products);
            return {
                ...state,
                products: action.products,
                loading: false,
                error: false,
            };
        case "ADD_PRODUCTS":
            return {
                ...state,
                products: state.products.concat(action.product),
                loading: false,
                error: false,
            };
        case "DELETE_PRODUCT":
            let updateProducts = state.products.filter(
                (prod) => prod.id !== action.id
            );
            return {
                ...state,
                products: updateProducts,
                loading: false,
                error: false,
            };
        case "UPDATE_PRODUCT":
            let updateEditProducts = [...state.products];
            let updateProductIndex = updateEditProducts.findIndex(
                (prod) => prod.id === action.product.id
            );
            updateEditProducts[updateProductIndex] = action.product;
            return {
                ...state,
                products: updateEditProducts,
                loading: false,
                error: false,
            };
        default:
            return state;
    }
};

export default Reducer;
