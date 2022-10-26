import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import productService from '../../services/product.service'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Loader from '../../components/Loader/Loader'
import { CartContext } from "../../context/cart.context"
import { AuthContext } from '../../context/auth.context'
import commentService from '../../services/comment.service'
import SliderProducts from '../../components/SliderProducts/SliderProducts'

function ProductDetailsPage() {

    const [ProductDetails, setProductDetails] = useState()
    const { cart, setCart, cartItems, setAddStatus, setShowCart, addItem } = useContext(CartContext)
    const { product_id } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments()
        productService
            .getOneProduct(product_id)
            .then(({ data }) => setProductDetails(data))
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        addItem(product_id, quantity)
    }

    const handleInputChange = e => {
        const { value } = e.currentTarget
        setQuantity(value)
    }

    const handleCommentChange = e => {
        const { value } = e.currentTarget
        setComment(value)
    }

    const handleCommentSubmit = e => {
        e.preventDefault()
        commentService
            .createComment(product_id, comment)
            .then(() => {
                getComments()

            })
    }

    const getComments = () => {
        commentService
            .getAllComments(product_id)
            .then(({ data }) => {
                console.log('la fucking data', data)
                setComments(data)
            })
    }

    return (

        !ProductDetails
            ?
            <Loader />
            :
            <Container className='mt-5'>
                <hr />
                <Row>
                    <Col md={{ span: 6 }}>
                        <img style={{ width: '100%' }} src={ProductDetails.imageUrl} alt={ProductDetails.title} />
                    </Col>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h3>{ProductDetails.title}</h3>
                        <p>Tamaño:{ProductDetails.size}</p>
                        <p>Categoria: {ProductDetails.category}</p>
                        <p>Precio:{ProductDetails.price}$</p>
                        <hr />
                        <p>{ProductDetails.description}</p>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="productQuantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control onChange={handleInputChange} type="number" min="0" value={quantity} maxvalue={ProductDetails.stock} name="productQuantity" />
                            </Form.Group>
                            {ProductDetails.stock > 0
                                ?
                                <Button variant="dark" type="submit">Add to cart</Button>
                                :
                                <Button variant="dark" type="submit" disabled >No stock left</Button>}
                        </Form>
                    </Col>

                    <Col lg={12} className="mx-auto m-0 mb-5">
                        <Link to="/productos" className='d-block mt-5 text-center'>
                            <Button variant="dark">Volver</Button>
                        </Link>
                    </Col>

                    <Col lg={9} className="mx-auto m-0 border-1 border border-dark">

                        <Form onSubmit={handleCommentSubmit}>
                            <Form.Group className="mb-3" controlId="comment">
                                <Form.Label className=' d-block text-center mx-auto m-0 mb-5 mt-3'>Comentarios</Form.Label>
                                <Form.Control onChange={handleCommentChange} type="text" value={comment} name="comment" />
                            </Form.Group>
                            <Button className='w-50 mb-5 mx-auto m-0 d-block' variant="dark" type="submit">Enviar</Button>
                        </Form>
                        <Row>

                            {
                                comments.map(eachComment => {
                                    return (
                                        <Col lg={12} className="border-1 border border-dark w-50 mx-auto m-0">
                                            <Row>
                                                <Col lg={12}>
                                                    <p className='text-center'>{eachComment.owner.fullName}</p>
                                                </Col>
                                                <Col lg={12}>
                                                    <p className='text-center'>{eachComment.description}</p>
                                                </Col>
                                            </Row>

                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
    )
}

export default ProductDetailsPage