import React, { createContext, useState, useEffect } from "react";

export const CartContext= createContext([]); 
export const CartContextProvider = ({children}) => {
    // Estados, funciones, hooks, etc.
    const [productsAdded, setProductsAdded] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(
        ()=> {
            const amount = productsAdded
            .map( (product)=> parseInt(product.item.price)*product.quantity)
            .reduce((partialSum, a)=> partialSum + a, 0);
            setTotalAmount(amount);
            },[productsAdded]
        )


    function addItem(item, quantity) {
        const isAlreadyAdded = isInCart(item.id);
        if (isAlreadyAdded) {
            setProductsAdded((prevState) =>
            prevState.map((productAdded) =>
                productAdded.item.id === item.id
                ? {
                    ...productAdded,
                    quantityAdded: productAdded.quantityAdded + quantity,
                    }
                : productAdded
            )
            );
        } else {
            setProductsAdded((prevState) =>
            prevState.concat({ item, quantityAdded: quantity })
            );
        }
        }

    function removeItem(id) {
        setProductsAdded(
            (prevState) => (
                prevState.filter( (product) => product.item.id !== id )
            )
        );
    };

    function clear () {
        setProductsAdded([]);

    };

    function isInCart (id) {
        return Boolean(productsAdded.find((product)=> product.item.id === id));
    };

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, isInCart, productsAdded, totalAmount}}>
            {children}
        </CartContext.Provider>
    )
}