import React, { createContext, useState,useEffect } from 'react'
import cartService from '../services/cart.service'

const CartContext = createContext()

function CartProviderWrapper(props) {

    const [show, setShow] = useState(false)
    const [cart, setCart] = useState({
            product:'',
            quantity:0
    })
    const showCart = (title, description) => {
        setShow(true)
        setMessageInfo({ title, description })
    }

    return (
        <CartContext.Provider value={{ show, setShow, cart, setCart }}>
            {props.children}
        </CartContext.Provider>
    )




}

export { CartContext, CartProviderWrapper}





//REDUCERS JS
// export const ADD_PRODUCT = "ADD_PRODUCT";
// export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

// const addProductToCart = (product, state) => {
//     const updatedCart = [...state.cart];
//     const updatedItemIndex = updatedCart.findIndex(
//         item => item.id === product.id
//     );

//     if (updatedItemIndex < 0) {
//         updatedCart.push({ ...product, quantity: 1 });
//     } else {
//         const updatedItem = {
//             ...updatedCart[updatedItemIndex]
//         };
//         updatedItem.quantity++;
//         updatedCart[updatedItemIndex] = updatedItem;
//     }
//     return { ...state, cart: updatedCart };
// };

// const removeProductFromCart = (productId, state) => {
//     console.log("Removing product with id: " + productId);
//     const updatedCart = [...state.cart];
//     const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

//     const updatedItem = {
//         ...updatedCart[updatedItemIndex]
//     };
//     updatedItem.quantity--;
//     if (updatedItem.quantity <= 0) {
//         updatedCart.splice(updatedItemIndex, 1);
//     } else {
//         updatedCart[updatedItemIndex] = updatedItem;
//     }
//     return { ...state, cart: updatedCart };
// };

// export const shopReducer = (state, action) => {
//     switch (action.type) {
//         case ADD_PRODUCT:
//             return addProductToCart(action.product, state);
//         case REMOVE_PRODUCT:
//             return removeProductFromCart(action.productId, state);
//         default:
//             return state;
//     }
// };
//GLOBALSTATE JS

//SHOPCONTEXT JS