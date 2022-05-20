import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Cart from '../../components/Cart/Cart'
// import { CartContext } from '../../context/cart.context.js'
import './CartPage.css'

const CartPage = () => {
    return (
        <>
            <Cart />
        </>
    )
}

export default CartPage