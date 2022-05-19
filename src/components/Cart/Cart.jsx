import './Cart.css'

import React, { useContext, useEffect } from 'react';
import { Table, Form, Button } from 'react-bootstrap'
import { CartContext } from '../../context/cart.context';
const Cart = () => {
    const { cart, cartItems, getAllItems, updateQuantity, deleteItem } = useContext(CartContext)

    useEffect(() => {
        getAllItems()
    }, [])

    console.log('los items EN EL CARRO', cartItems)

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            {cartItems.map(item => {
                const handleSubmit = e => {
                    e.preventDefault()
                    console.log('holiiiiiiiii', item.product._id)
                    const{ product } = item
                    console.log('er product', product)
                    const { _id } = product
                    console.log('er id', _id)
                    deleteItem(_id)
                }

                const handleInputChange = e => {
                    const { value } = e.currentTarget
                    console.log('holaaaaaaaaaaaaaaaaa',value)
                }

                return (
                    <tbody>
                        <tr>
{/* la imagen es demasiado grande!   <td><img src={item.product.imageUrl}/></td> */}
                            <td>{item.product.title}</td>
                            <td>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="productQuantity">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control onChange={handleInputChange} type="number" min="0" maxvalue={item.product.stock} value={item.quantity} name="productQuantity" />
                                        <Button size='sm' onClick={() => updateQuantity(item.product._id, item.quantity++)}>+</Button>
                                        <Button size='sm' onClick={() => updateQuantity(item.product._id, item.quantity--)}>-</Button>
                                        <Button variant="dark" type='submit'>Delete</Button>
                                    </Form.Group>
                                </Form>
                            </td>
                            <td>{item.product.price}</td>
                        </tr>
                    </tbody>

                )
            })}
        </Table>
    )
}
export default Cart;