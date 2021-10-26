import { createContext } from "react";

const ProductContext = createContext({
    products: [],
    loading: false,
    error: false,
    errorMessage: null,
    fetchProducts: () => {},
    addProduct: (data) => {},
    deleteProduct: (id) => {},
    updateProducts: (prod) => {},
});

export default ProductContext;
