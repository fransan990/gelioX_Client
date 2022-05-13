import { Row, Col } from "react-bootstrap"
import Loader from "../Loader/Loader"
import ProductCard from "../ProductCard/ProductCard"

const ProductsList = ({ products }) => {

    console.log("productos", products)
    return (

        products.length
            ?
            <Row>
                {
                    products.map(product => {
                        return (
                            <Col md={{ span: 4 }} key={product._id}>
                                <ProductCard  {...product} />
                            </Col>
                        )
                    })
                }
            </Row>
            :
            <Loader />
    )
}

export default ProductsList