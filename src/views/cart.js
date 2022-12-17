import { Layout } from "../components/Layout";
import {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import {item} from "../components/Item";
import { CartContext } from "../context/CartContext";

const CartView = () => {

    const navigate = useNavigate();
    const {productsIn, clear} = useContext(CartContext);
    















    return (
        <Layout>
            <h1>CART VIEW </h1>
        </Layout>
    )
};
export default CartView;