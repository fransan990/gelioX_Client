import './SliderProducts.css'
import React, { useContext, Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/Loader';


import Slider from "react-slick";



const SliderProducts = ({ products }) => {

    console.log('estos son los productos--->', products)

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
                {/* poner el fondo negro para que se vea las flechas */}
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




// export default class CenterMode extends Component {
//     render() {
//         const settings = {
//             className: "center",
//             centerMode: true,
//             infinite: true,
//             centerPadding: "60px",
//             slidesToShow: 3,
//             speed: 500
//         };
//         return (
//             <div>
//                 <h2>Center Mode</h2>
//                 <Slider {...settings}>

//                     products.length
//                     ?
//                     <Row>
//                         {
//                             products.map(product => {
//                                 return (
//                                     <Col md={{ span: 4 }} key={product._id}>
//                                         <ProductCard  {...product} />
//                                     </Col>
//                                 )
//                             })
//                         }
//                     </Row>
//                     :
//                     <Loader />

//                 </Slider>
//             </div>
//         );
//     }
// }


// import React, { Component } from "react";
// import { Container } from "react-bootstrap";
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         };
//         return (
//             <Container className="bg-dark">
//                 <div>
//                     <h2> Single Item</h2>
//                     <Slider {...settings}>
//                         <div>
//                             <h3>1</h3>
//                         </div>
//                         <div>
//                             <h3>2</h3>
//                         </div>
//                         <div>
//                             <h3>3</h3>
//                         </div>
//                         <div>
//                             <h3>4</h3>
//                         </div>
//                         <div>
//                             <h3>5</h3>
//                         </div>
//                         <div>
//                             <h3>6</h3>
//                         </div>
//                     </Slider>
//                 </div>
//             </Container>
//         );
//     }
// }