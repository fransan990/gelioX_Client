import React, { createContext, useState, useEffect, useContext } from 'react'
import cartService from '../services/cart.service'
import { AuthContext } from './auth.context'

const CartContext = createContext()

function CartProviderWrapper(props) {

    const [getStatus, setGetStatus] = useState(true)
    const [addStatus, setAddStatus] = useState(false)

    const [cartItems, setCartItems] = useState([])
    const [cart, setCart] = useState(
        {
            owner: undefined,
            items: []
        }
    )

    useEffect(() => {
        getStatus && getCart()
    }, [getStatus, addStatus])

    const getCart = () => {
        cartService
            .getCart()
            .then(({ data }) => {
                setCart(data[0])
                setGetStatus(false)
            })
            .catch(err => console.log(err))
    }

    const addItem = (itemId, itemQ) => {
        cartService
            .addItem(itemId, itemQ)
            .then((updatedCart) => {

                setCart(updatedCart)
                setAddStatus(false)
                getAllItems()
            })
            .catch(err => console.log(err))
    }

    const updateQuantity = (itemId, quantity) => {
        cartService
            .updateQuantity(itemId, quantity)
            .then(() => getCart())
            .catch(err => console.log(err))
    }

    const deleteItem = (itemId) => {
        cartService
            .deleteItem(itemId)
            .then(() => {
                getCart()
                getAllItems()
            })
            .catch(err => console.log(err))
    }

    const getAllItems = () => {
        cartService
            .getAllItems()
            .then(({ data }) => {
                setCartItems(data)
                getCart()
            })
            .catch(err => console.log(err))
    }

    useEffect(() => { getAllItems() }, [])

    return (
        <CartContext.Provider value={{ cart, setCart, getStatus, setGetStatus, setAddStatus, addItem, getAllItems, cartItems, updateQuantity, deleteItem }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProviderWrapper }