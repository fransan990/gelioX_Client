import { Row, Col } from "react-bootstrap"
import { ProductContext } from "../../context/products.context"
import Loader from "../Loader/Loader"
import ProductCard from "../ProductCard/ProductCard"

const ProductsList = ({ products }) => {

    return (

        products.length
            ?
            <Row>
                <Col lg={10} className="mx-auto m-0">
                    <Row>
                        {
                            products.map(product => {
                                return (
                                    <Col lg={3} key={product._id} className="mt-5 " data-aos="fade-up"
                                        data-aos-duration="2000">
                                        <ProductCard  {...product} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>

            </Row >
            :

            <Loader />

    )
}

export default ProductsList