import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import productService from '../../services/product.service'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Loader from '../../components/Loader/Loader'
import { CartContext } from "../../context/cart.context"
import { AuthContext } from '../../context/auth.context'
import commentService from '../../services/comment.service'


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
            <Container>
                <h1>Detalles de {ProductDetails.title}</h1>
                <hr />
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h3>Información</h3>
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
                    <Col md={{ span: 6 }}>
                        <img style={{ width: '100%' }} src={ProductDetails.imageUrl} alt={ProductDetails.title} />
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

// const NewProductForm = ({ fireFinalActions }) => {

//     const [productDate, setproductDate] = useState({
//         title: '',
//         description: '',
//         imageUrl: '',
//         category: '',
//         size: '',
//         colors: '',
//         price: 0,
//         stock: 0
//     })

//     const { setUpdateStatus } = useContext(ProductContext)
//     const [loadingImage, setLoadingImage] = useState(false)

//     const handleInputChange = e => {
//         const { name, value } = e.currentTarget

//         setproductDate({
//             ...productDate,
//             [name]: value               // computed property names
//         })
//     }

//     const handleSubmit = e => {

//         e.preventDefault()

//         productService
//             .saveProduct(productDate)
//             .then(response => {
//                 fireFinalActions()
//                 setUpdateStatus(true)
//             })
//             .catch(err => console.log(err))
//     }

//     const handleImageUpload = (e) => {

//         setLoadingImage(true)

//         const uploadData = new FormData()
//         uploadData.append('imageData', e.target.files[0])

//         uploadService
//             .uploadImage(uploadData)
//             .then(({ data }) => {
//                 setLoadingImage(false)
//                 setproductDate({ ...productDate, imageUrl: data.cloudinary_url })
//                 console.log("ha funcionado")
//             })
//             .catch(err => console.log(err))
//     }

//     const { title, description, category, size, colors, price, stock } = productDate

//     return (

//         <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="title">
//                 <Form.Label>Nombre</Form.Label>
//                 <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="description">
//                 <Form.Label>Descripción</Form.Label>
//                 <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
//                 <Form.Text className="text-muted">Mínimo 20 caracteres</Form.Text>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="imageUrl">
//                 <Form.Label>Imagen (archivo)</Form.Label>
//                 <Form.Control type="file" onChange={handleImageUpload} />
//             </Form.Group>

//             <Form.Control as='select' aria-label="Default select example" className="mb-3" name="category" value={category} onChange={handleInputChange}>
//                 <option value="sneakers">sneakers</option>
//                 <option value="apparel">apparel</option>
//             </Form.Control>

//             <Form.Control as='select' aria-label="Default select example" className="mb-3" name="size" value={size} onChange={handleInputChange}>
//                 <option value="XXL">XXL</option>
//                 <option value="Xl">Xl</option>
//                 <option value="L">L</option>
//                 <option value="M">M</option>
//                 <option value="S">S</option>
//                 <option value="XS">XS</option>
//             </Form.Control>

//             <Form.Group className="mb-3" controlId="colors">
//                 <Form.Label>Color</Form.Label>
//                 <Form.Control type="string" value={colors} onChange={handleInputChange} name="colors" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="price">
//                 <Form.Label>Precio</Form.Label>
//                 <Form.Control type="number" value={price} onChange={handleInputChange} name="price" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="stock">
//                 <Form.Label>Stock</Form.Label>
//                 <Form.Control type="number" value={stock} onChange={handleInputChange} name="stock" />
//             </Form.Group>


//             <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Creando la magia'}</Button>
//         </Form>
//     )
// }

// export default NewProductForm