import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ProductCard from "../../components/ProductCard/ProductCard"
import userService from "../../services/user.service"




const ProductFavPage = () => {

    const [productsFav, setProductsFav] = useState([])

    const loadFavProducts = () => {
        userService
            .getUserDetails()
            .then(({ data }) => {
                setProductsFav(data.favProducts)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadFavProducts()
    }, [])


    return (

        <Col lg={12} className="mt-5 ">
            <Row>

                <h4>Estamos</h4>
                {
                    productsFav.map(product => {
                        return (
                            <Col md={{ span: 4 }} key={product._id} className="mt-3">
                                <div>
                                    <div>
                                        <img src={product.imageUrl} className="w-75 h-50" />
                                        <div>{product.title}</div>
                                        <div>Precio {product.price} $</div>
                                        <div>Tamaño {product.size}</div>
                                        <div>{product.description}</div>


                                    </div>

                                </div>
                            </Col>
                        )
                    })
                }
            </Row>

        </Col>


    )



}

export default ProductFavPage