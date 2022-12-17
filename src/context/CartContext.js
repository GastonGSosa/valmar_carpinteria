import React, { createContext } from "react";

export const CartContext= createContext(); 

export const CartContextProvider = ({children}) => {
    // Estados, funciones, hooks, etc.
    function addItem(item, quantity) {

    };

    function removeItem(id) {

    };

    function clear () {

    };

    function isInCart (id) {

    };


    return (
        <CartContext.Provider value={{addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}