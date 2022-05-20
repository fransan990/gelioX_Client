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
                // console.log(data)
                // data.map((eachComment) => {
                //     const { description, owner } = eachComment
                //     const { fullName } = owner
                //     console.log(fullName, description)
                //     setComments(comments.push({ fullName, description }))
                //     console.log(comments)
            })

    }

    return (

        !ProductDetails
            ?
            <Loader />
            :
            <Container className='mt-5'>
                {/* <h5>{ProductDetails.title}</h5> */}
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
                    {/* <SliderProducts /> */}



                    <Col lg={6} className="mx-auto m-0">
                        <Link to="/productos" className='d-block mt-5 text-center'>
                            <Button variant="dark">Volver</Button>
                        </Link>
                    </Col>
                    <Link to="/productos">
                        <Button variant="dark">Volver</Button>
                    </Link>
                    <Form onSubmit={handleCommentSubmit}>
                        <Form.Group className="mb-3" controlId="comment">
                            <Form.Label>Comment something</Form.Label>
                            <Form.Control onChange={handleCommentChange} type="text" value={comment} name="comment" />
                        </Form.Group>
                        <Button variant="dark" type="submit">Post</Button>
                    </Form>
                </Row>

                {
                    comments.map(eachComment => {
                        return (
                            <>
                                <p>{eachComment.description}</p>
                                <p>{eachComment.owner.fullName}</p>
                            </>
                        )
                    })
                }
            </Container>
    )
}

export default ProductDetailsPage