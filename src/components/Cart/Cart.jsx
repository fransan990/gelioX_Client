import './Cart.css'
import React, { useContext, useEffect, useState } from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { CartContext } from '../../context/cart.context';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, cartItems, getAllItems, updateQuantity, deleteItem } = useContext(CartContext)

    let total = 0

    useEffect(() => {
        getAllItems()
    }, [])

    const handleInputChange = e => {
        const { value } = e.currentTarget

    }
    const totalPricePerProduct = (item) => {
        total += item.product.price * item.quantity
        return item.product.price * item.quantity
    }

    return (
        <Row>
            <Col lg={12}>
                <Row>
                    {
                        cartItems.map(item => {
                            const handleSubmit = e => {
                                e.preventDefault()
                                const { product } = item
                                const { _id } = product
                                deleteItem(_id)
                            }
                            console.log(total)
                            return (
                                <Col lg={12} className="mb-5">
                                    <Row>
                                        <Col lg={6}>
                                            <img src={item.product.imageUrl} className="w-75 h-100 text-center" ></img>
                                        </Col>
                                        <Col lg={6}>
                                            <Row>
                                                <Col lg={12}>
                                                    {item.product.title}
                                                </Col>
                                                <Col lg={12}>
                                                    Size {item.product.size}
                                                </Col>
                                                <Col lg={12} className="mb-3">
                                                    precio {item.product.price} $
                                                </Col>
                                                <Col lg={12}>
                                                    <Form onSubmit={handleSubmit}>
                                                        <Form.Group className="mb-3" controlId="productQuantity">
                                                            <Form.Label>Quantity</Form.Label>
                                                            <Form.Control onChange={handleInputChange} type="number" min="0" maxvalue={item.product.stock} value={item.quantity} name="productQuantity" />
                                                            <Button size='sm' onClick={() => updateQuantity(item.product._id, item.quantity++)}>+</Button>
                                                            <Button size='sm' onClick={() => updateQuantity(item.product._id, item.quantity--)}>-</Button>
                                                        </Form.Group>
                                                    </Form>
                                                </Col>
                                                <Col lg={12} className="mb-3">
                                                    Precio total {totalPricePerProduct(item)} $
                                                </Col>
                                                <Col lg={12}>
                                                    <Form onSubmit={handleSubmit}>
                                                        <Button variant="dark" type='submit'>Delete</Button>
                                                    </Form>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            )
                        })
                    }
                    <hr />
                    <Col lg={12} className="p-3">
                        <Row>
                            <Col lg={6}>Subtotal</Col>
                            <Col lg={6} className="text-end">{total} $</Col>
                            <Col lg={12} className="p-4">
                                <Link to="/checkout" className=" d-block text-center btn btn-warning">Finalizar compra</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
export default Cart;