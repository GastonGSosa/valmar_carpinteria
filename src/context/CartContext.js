import React, { createContext, useState } from "react";

export const CartContext= createContext([]); 

export const CartContextProvider = ({children}) => {
    // Estados, funciones, hooks, etc.
    const [productsIn, setProductsIn] = useState([]);


    function addItem(item, quantity) {
        const alreadyIn = isInCart(item.id);
        if (alreadyIn) {
            setProductsIn(
                (prevState) => prevState.map(
                    (productIn) => productIn.item.id === item.id ? 
                    {
                        ...productIn,
                        quantityIn: productIn.quantityIn + quantity
                    }:{
                        productIn
                    }
                )

            )

        } else {
            setProductsIn(
                (prevState) => prevState.concat({item, quantityAdded: quantity})
            );
        }

    };

    function removeItem(id) {
        setProductsIn(
            (prevState) => (
                prevState.filter( (product) => product.item.id !== id )
            )
        );
    };

    function clear () {
        setProductsIn([]);

    };

    function isInCart (id) {
        return Boolean(productsIn.find((product)=> product.item.id === id));
    };


    return (
        <CartContext.Provider value={{addItem, removeItem, clear, isInCart, productsIn}}>
            {children}
        </CartContext.Provider>
    )
}