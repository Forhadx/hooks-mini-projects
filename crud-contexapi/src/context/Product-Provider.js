import { useCallback, useReducer } from "react";
import ProductContext from "./Product-Context";
import Reducer from "./Product-Reducer";
import axios from "axios";

const initialState = {
    products: [],
    loading: false,
    error: false,
    errorMessage: null,
};

const ProductsProvider = (props) => {
    const [prodState, dispatch] = useReducer(Reducer, initialState);

    const onFetchProducts = useCallback(async () => {
        let updateProducts = [];
        dispatch({ type: "START" });
        try {
            let result = await axios.get(
                "https://hooks-crud-4a1f6-default-rtdb.firebaseio.com/products.json"
            );
            for (let key in result.data) {
                updateProducts.push({
                    ...result.data[key],
                    id: key,
                });
            }
            dispatch({
                type: "FETCH_PRODUCTS",
                products: updateProducts,
            });
        } catch (err) {
            dispatch({ type: "ERROR", errorMessage: "something went wrong!" });
        }
    }, []);

    const onAddProduct = useCallback(async (data) => {
        dispatch({ type: "START" });
        try {
            let result = await axios.post(
                "https://hooks-crud-4a1f6-default-rtdb.firebaseio.com/products.json",
                data
            );
            dispatch({
                type: "ADD_PRODUCTS",
                product: { ...data, id: result.data.name },
            });
        } catch (err) {
            dispatch({ type: "ERROR", errorMessage: "something went wrong!" });
        }
    }, []);

    const onDeleteProduct = useCallback(async (id) => {
        dispatch({ type: "START" });
        try {
            await axios.delete(
                `https://hooks-crud-4a1f6-default-rtdb.firebaseio.com/products/${id}.json`
            );
            dispatch({
                type: "DELETE_PRODUCT",
                id: id,
            });
        } catch (err) {
            dispatch({ type: "ERROR", errorMessage: "something went wrong!" });
        }
    }, []);

    const onUpdateProducts = useCallback(async (prod) => {
        dispatch({ type: "START" });
        try {
            await axios.put(
                `https://hooks-crud-4a1f6-default-rtdb.firebaseio.com/products/${prod.id}.json`,
                prod
            );
            dispatch({ type: "UPDATE_PRODUCT", product: prod });
        } catch (err) {
            dispatch({ type: "ERROR", errorMessage: "something went wrong!" });
        }
    }, []);

    const productContext = {
        products: prodState.products,
        loading: prodState.loading,
        error: prodState.error,
        errorMessage: prodState.errorMessage,
        fetchProducts: onFetchProducts,
        addProduct: onAddProduct,
        deleteProduct: onDeleteProduct,
        updateProducts: onUpdateProducts,
    };

    return (
        <ProductContext.Provider value={productContext}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductsProvider;
