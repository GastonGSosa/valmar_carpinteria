import React, { createContext, useState, useEffect } from "react";

export const CartContext= createContext([]); 

export const CartContextProvider = ({children}) => {
    // Estados, funciones, hooks, etc.
    const [productsIn, setProductsIn] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(
        ()=> {
            const amount = productsIn
            .map( (product)=> parseInt(product.item.price)*product.quantityIn)
            .reduce((partialSum, a)=> partialSum + a, 0);
            setTotalAmount(amount);
            }
        )


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
                (prevState) => prevState.concat({item, quantityIn: quantity})

            );
            console.log(productsIn)
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

    function log () {
        console.log("la concha de tumadre")
    }


    return (
        <CartContext.Provider value={{addItem, removeItem, clear, isInCart, productsIn, totalAmount,log}}>
            {children}
        </CartContext.Provider>
    )
}