import { useContext, useState } from "react"
import { Col, Container, Form, Row, Table, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/cart.context"
import orderService from "../../services/order.service"


const CheckoutPage = () => {

    const { cart, cartItems } = useContext(CartContext)

    const [orderDetails, setOrderDetails] = useState({})

    const handleInputChange = e => {
        setOrderDetails({
            ...orderDetails, [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate()

    const handleForm = e => {
        e.preventDefault()

        orderService
            .createOrder(cart._id, orderDetails)
            .then(() => navigate('/thankyou'))
            .catch(err => console.log(err))
    }

    const { address1, address2, postalCode, city } = orderDetails


    return (
        <Container className="mt-5">
            <h2 className="text-center mt-2">Finalizar pedido</h2>
            <hr />
            <Row>
                <Col md={7}>
                    <h4>Detalles del pedido</h4>

                    <Table striped hover className="text-center">
                        {/* <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio/ud</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead> */}
                        <tbody>
                            {cartItems.map((elm) => {

                                const { product } = elm

                                return (
                                    <>
                                        <tr>
                                            <th className="p-3">Imagen</th>
                                            <th className="p-3">Producto</th>
                                            <th className="p-3">Cantidad</th>
                                            <th className="p-3">Precio/ud</th>
                                            <th className="p-3">Subtotal</th>
                                        </tr>
                                        <tr>
                                            <td><img src={product.imageUrl} className="w-50 h-50" /></td>
                                            <td>{product.title}</td>
                                            <td>{elm.quantity} uds</td>
                                            <td>{product.price} €</td>
                                            <td>{product.price * elm.quantity} €</td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
                <Col md={5}>

                    <h4>Detalles de envío</h4>

                    <Form onSubmit={handleForm}>

                        <Form.Group className="mb-3" controlId="address1">
                            <Form.Label>Dirección (línea 1)</Form.Label>
                            <Form.Control type="text" name="address1" value={address1} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="address2">
                            <Form.Label>Dirección (línea 2)</Form.Label>
                            <Form.Control type="text" name="address2" value={address2} onChange={handleInputChange} />
                        </Form.Group>

                        <Row className="mb-3">

                            <Form.Group as={Col} className="mb-3" controlId="postalCode">
                                <Form.Label>Código Postal</Form.Label>
                                <Form.Control type="number" name="postalCode" value={postalCode} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="city">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control type="text" name="city" value={city} onChange={handleInputChange} />
                            </Form.Group>

                        </Row>

                        <Button variant="dark" type="submit">Comprar</Button>

                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default CheckoutPage