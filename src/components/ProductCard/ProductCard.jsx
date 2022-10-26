import './ProductCard.css'
import { Col, Card, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { AuthContext } from './../../context/auth.context'
import { useContext } from 'react'
import { FaHeart, FaSearch } from "react-icons/fa";
import productService from '../../services/product.service'
import { FaEye } from 'react-icons/fa'

const ProductCard = ({ _id, imageUrl, title, owner, price, visitCounter }) => {

    const { user } = useContext(AuthContext)

    const addToFav = () => {
        productService
            .productFav(_id)
            .then(({ data }) => {
                console.log('añadido a favs', data)
                // setProductsFav(data)
            })
            .catch(err => console.log(err))
    }

    const visits = () => {
        productService
            .visitCounter(_id)
            .then(({ data }) => {
                console.log('los datos de visit counter',)
            })
    }

    return (

        <Card >
            <div className="card-info">

                <img src={imageUrl} className=" card-avatar" />
                <div className="card-title text-center">{title}</div>
                <div className="card-title text-center">{price}$</div>

            </div>
            <Col lg={12} className="card-social">
                <Row>
                    <Col lg={4} className="text-center">
                        <p className='d-block'>{visitCounter}<FaEye /></p>
                    </Col>
                    <Col lg={4} className="text-center" onClick={addToFav}>
                        <FaHeart />
                    </Col>
                    <Col lg={4} className="card-social__item text-center" onClick={visits}>
                        <Link to={`/detalles/${_id}`} className='btn'><FaSearch /></Link>
                    </Col>
                </Row>
            </Col>
        </Card >
    )
}


export default ProductCard