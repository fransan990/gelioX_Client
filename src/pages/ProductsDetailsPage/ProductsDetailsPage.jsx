import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import productService from '../../services/product.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Loader from '../../components/Loader/Loader'

function ProductDetailsPage() {

    const [ProductDetails, setProductDetails] = useState()

    const { product_id } = useParams()

    useEffect(() => {

        productService
            .getOneProduct(product_id)
            .then(({ data }) => setProductDetails(data))
            .catch(err => console.log(err))

    }, [])

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
                    </Col>
                    <Col md={{ span: 6 }}>
                        <img style={{ width: '100%' }} src={ProductDetails.imageUrl} alt={ProductDetails.title} />
                    </Col>
                    <Link to="/productos">
                        <Button variant="dark">Volver</Button>
                    </Link>
                </Row>
            </Container>
    )
}

export default ProductDetailsPage