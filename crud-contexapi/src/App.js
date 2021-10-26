import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ProductsList from "./components/ProductsList";

const App = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [editProduct, setEditProduct] = useState({});

    const editProductHandler = (prod) => {
        setEditProduct(prod);
        setIsEdit(true);
    };

    return (
        <div className="App">
            <h1>crud operation with context api</h1>
            <Form editProduct={editProduct} isEdit={isEdit} />
            <ProductsList editProductHandler={editProductHandler} />
        </div>
    );
};

export default App;
