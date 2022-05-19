import { Row, Col } from "react-bootstrap"
import { ProductContext } from "../../context/products.context"
import Loader from "../Loader/Loader"
import ProductCard from "../ProductCard/ProductCard"

const ProductsList = ({ products }) => {


    return (



        products.length
            ?
            <Row>
                {
                    products.map(product => {
                        return (
                            <Col md={{ span: 4 }} key={product._id} className="mt-3" data-aos="fade-up"
                                data-aos-duration="2000">
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