import './SliderProducts.css'
import React, { useContext, Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/Loader';
import Slider from "react-slick";

const SliderProducts = ({ products }) => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    return (

        products.length
            ?
            <Row>
                <div className='p-5'>
                    <Slider {...settings}>
                        {

                            products.map(product => {
                                return (


                                    <Col md={{ span: 4 }} key={product._id} className="cardSlider">
                                        <ProductCard  {...product} />
                                    </Col>

                                )
                            })

                        }
                    </Slider>
                </div >
            </Row>
            :
            <Loader />

    )
}

export default SliderProducts