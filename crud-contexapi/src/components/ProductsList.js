import React, { useContext, useEffect } from "react";
import ProductContext from "../context/Product-Context";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const ProductsList = (props) => {
    const prodCtx = useContext(ProductContext);

    const { fetchProducts } = prodCtx;

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const delelteProductHandler = (id) => {
        prodCtx.deleteProduct(id);
    };

    const updateProductHandler = (prod) => {
        props.editProductHandler(prod);
    };

    return (
        <>
            {prodCtx.loading ? (
                <div className="loader">loading...</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>price</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prodCtx.products.map((prod) => (
                            <tr key={prod.id}>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td
                                    className="btn"
                                    onClick={() => updateProductHandler(prod)}
                                >
                                    <FiEdit />
                                </td>
                                <td
                                    className="btn"
                                    onClick={() =>
                                        delelteProductHandler(prod.id)
                                    }
                                >
                                    <AiOutlineDelete />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default ProductsList;
