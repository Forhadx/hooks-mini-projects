import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/Product-Context";

const Form = (props) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const productCtx = useContext(ProductContext);

    const { isEdit, editProduct } = props;

    useEffect(() => {
        if (isEdit) {
            setName(editProduct.name);
            setPrice(editProduct.price);
        }
    }, [isEdit, editProduct]);

    const formHandler = (event) => {
        event.preventDefault();
        let data = {
            name: name,
            price: price,
        };
        if (props.isEdit) {
            productCtx.updateProducts({ ...data, id: props.editProduct.id });
        } else {
            productCtx.addProduct(data);
        }
        setName("");
        setPrice("");
    };

    return (
        <>
            <form onSubmit={formHandler}>
                <input
                    type="text"
                    placeholder="enter product name."
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="number"
                    placeholder="enter product price"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
                <button type="submit">submit</button>
            </form>
        </>
    );
};

export default Form;
