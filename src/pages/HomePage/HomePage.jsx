import { Col, Row, Button } from "react-bootstrap"
import "./HomePage.css"

import Aos from "aos";
import { useContext, useEffect } from "react";
import "aos/dist/aos.css"
import { ProductContext } from "../../context/products.context";
import SliderProducts from "../../components/SliderProducts/SliderProducts";
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HomePage = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const { products } = useContext(ProductContext)
    console.log('en la homepage --Z', products)

    return (
        <>
            <Col lg={12}>
                <div className="fotoPortadaPI">

                    <img src="../../../images/fotoPrincipal.webp" alt="" className="img-fluid imgPortadaInicio" />
                    <div className="centrado title-container">
                        <h1>TIME SOAKED SUMMER</h1>
                    </div>
                    <div className="textoIzquierda" data-aos="fade-right">spring collection</div>
                    <div className="box1" data-aos="fade-up"></div>

                </div>
            </Col>
            <Col lg={12}>
                <Row>
                    <Col lg={3}>
                        <img src="../../../images/fotoChica24.png" alt="fotoChica1" data-aos="zoom-out-right" className="img-fluid boxIz" />
                    </Col>
                    <Col lg={3}>
                        <img src="../../../images/fotoImagen7.jpeg" alt="fotoChica2" data-aos="zoom-in" className="img-fluid boxIzC" />
                    </Col>
                    <Col lg={3}>
                        <img src="../../../images/fotoChica21.jpeg" alt="fotoChica4" data-aos="zoom-in" className="img-fluid boxDeC" />
                    </Col>
                    <Col lg={3}>
                        <img src="../../../images/fotoChica29.jpeg" alt="fotoChica5" data-aos="zoom-out-left" className="img-fluid boxDe" />
                    </Col>
                    <Col lg={4} className="cajaTextoFotos text-center" data-aos="flip-up">
                        <h2 className="mb-3">FIND YOUR CALIFORNIA TRAVEL</h2>
                        <p className="mb-3">As featured on Harper's Bazaar, find you California's Nico Guilis shoots Vanessa Hudgens in Lisbon, Portugal.</p>
                        <button className="cta">
                            <span><NavLink to="/productos" className="btn">Hover me</NavLink></span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </Col>
                </Row>
                <div className="box2" data-aos="fade-up-right"></div>
            </Col>


            <Col lg={12} className="cajaSeccion3">
                <Row>
                    <Col lg={6} className="cajaSeccion3Foto1" data-aos="fade-left">
                        <img src="../../../images/fotoChicoGafas.jpeg" alt="fotoChica1" className="img-fluid" />
                        <img src="../../../images/captura_1.png" alt="fotoChica1" className="img-fluid cajaSeccion3Foto1_1" data-aos="fade-down" data-aos-duration="4000" />



                    </Col>
                    <Col lg={6} className={"cajaSeccion3Foto2"} data-aos="fade-right">
                        <img src="../../../images/fotoChicaGafas.webp" alt="fotoChica1" className="img-fluid" />
                    </Col>

                    <Col lg={3} className={"cajaSeccion3Foto3"}>
                        <h3>
                            DAY DREAMER
                        </h3>
                        <p>
                            Write a song, do a dance; there's something about that velvet dress. In the middle of nowhere you can get away with anything.
                        </p>
                        <button className="buttonCajaSeccion3Foto3">
                            <span><NavLink to="/productos" className="btn">Hover me</NavLink></span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </Col>
                </Row>
            </Col>

            <Col className="cajaSeccion4">
                <Row>
                    <Col lg={4}>
                        <Row>
                            <Col lg={12}>
                                <img src="../../../images/imagenChicaSeccion4.jpeg" alt="imagenChica" className="img-fluid" data-aos="zoom-in-up" />
                                <div className="cajaBlanca1" data-aos="fade-up"></div>
                            </Col>
                            <Col lg={12} className="w-25 textoCajaSeccion4" data-aos="flip-up">
                                <h4>THE FIRST INSTALLMENT OF PETRA COLLINS' DANCE</h4>
                                <p> Phasellus scelerisque sed leo quis gravida. Fusce lobortis libero ut arcu blandit pharetra.</p>
                            </Col>
                        </Row>

                    </Col>
                    <Col lg={4}>
                        <Row>
                            <Col lg={12} className="textoCajaSeccion4_1 w-75" data-aos="flip-up">
                                <h4>THE FIRST INSTALLMENT OF PETRA COLLINS' DANCE</h4>
                                <p> Phasellus scelerisque sed leo quis gravida. Fusce lobortis libero ut arcu blandit pharetra.</p>
                            </Col>
                            <Col lg={12}>
                                <img src="../../../images/imagenChicaSeccion4_1.jpeg" alt="imagenChica" className="img-fluid" data-aos="zoom-in-up" />
                                <div className="cajaBlanca1" data-aos="fade-up">
                                </div>
                            </Col>

                        </Row>
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <Col lg={12}>
                                <img src="../../../images/imagenChicaSeccion4_2.jpeg" alt="imagenChica" className="img-fluid" data-aos="zoom-in-up" />
                                <div className="cajaBlanca1" data-aos="fade-up"></div>
                            </Col>
                            <Col lg={12} className="w-25 textoCajaSeccion4_2" data-aos="flip-up">
                                <h4>THE FIRST INSTALLMENT OF PETRA COLLINS' DANCE</h4>
                                <p> Phasellus scelerisque sed leo quis gravida. Fusce lobortis libero ut arcu blandit pharetra.</p>
                            </Col>

                        </Row>

                    </Col>
                </Row>
            </Col>
            <Col lg={12} className="cajaSeccion5">
                <Row>
                    <Col lg={6} data-aos="fade-left">
                        <img src="../../../images/imagenSeccion5_4.webp" alt="fotoChica1" className="img-fluid cajaSeccion5Foto1" />
                        <img src="../../../images/captura_3.png" alt="fotoChica1" className="img-fluid cajaSeccion5Foto2_1 z-index-1" data-aos="fade-left" data-aos-duration="4000" />



                    </Col>
                    <Col lg={6} data-aos="fade-right">
                        <img src="../../../images/imagenSeccion5_5.jpeg" alt="fotoChica1" className="img-fluid cajaSeccion5Foto2" />
                        <img src="../../../images/captura_2.png" alt="fotoChica1" className="img-fluid cajaSeccion3Foto2_1 z-index-1" data-aos="fade-down" data-aos-duration="4000" />

                    </Col>

                    <Col lg={3} className={"cajaSeccion5Foto3"}>
                        <h3>
                            DAY DREAMER
                        </h3>
                        <p>
                            Write a song, do a dance; there's something about that velvet dress. In the middle of nowhere you can get away with anything.
                        </p>
                        <button className="buttonCajaSeccion3Foto3">
                            <span><NavLink to="/productos" className="btn">Hover me</NavLink></span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </Col>
                </Row>
            </Col>
            <Col lg={12} className="cajaSeccion6">
                <h5 className="text-center">FUSION OF VARIETY</h5>
                <p className="text-center mt-3">Mauris risus nulla, vehicula nec diam ut, ornare ultrices nisi neque sed lacinia scelerisque.</p>

                {products && <SliderProducts products={products} />}

            </Col>
            <Col lg={12} className="cajaSeccion7">
                <Row>
                    <Col lg={12}>
                        <h5 className="cajaSeccion7_ti" data-aos="zoom-in-down">
                            Estamos aqui
                        </h5>
                    </Col>

                    <Col lg={4}>
                        <img src="../../../images/urban1.jpeg" alt="" className="rounded float-end h-50 align-bottom cajaSeccion7_img1 "
                            data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-offset="0" />
                    </Col>
                    <Col lg={4}>
                        <img src="../../../images/urban9.jpeg" alt="" className="rounded mx-auto d-block"
                            data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-offset="0" />
                    </Col>
                    <Col lg={4} >
                        <img src="../../../images/urban11.jpeg" alt="" className="rounded float-start mt-5 cajaSeccion7_img3"
                            data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-offset="0" />
                    </Col>
                    <Col lg={6}>
                        <img src="../../../images/urban16.jpeg" alt="" className="rounded float-end cajaSeccion7_img4_5 cajaSeccion7_img4_5_1 "
                            data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-offset="0" />
                    </Col>
                    <Col lg={6}>
                        <img src="../../../images/urban17.jpeg" alt="" className="rounded float-start cajaSeccion7_img4_5"
                            data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-offset="0" />
                    </Col>
                    <Col lg={4}>
                        <img src="../../../images/urban6.jpeg" alt="" className="rounded float-end cajaSeccion7_img5_6"
                            data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-offset="0" />
                    </Col>
                    <Col lg={4}>
                        <img src="../../../images/urban7.jpeg" alt="" className="rounded mx-auto d-block cajaSeccion7_img5_7"
                            data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-offset="0" />
                    </Col>
                    <Col lg={4}>
                        <img src="../../../images/urban8.jpeg" alt="" className="rounded float-start  cajaSeccion7_img5_8"
                            data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-offset="0" />
                    </Col>
                </Row>
            </Col>
            <Col lg={12} className="footer">
                <div className="bg-light text-center text-white">
                    <div className="p-4 pb-0">
                        <div className="mb-4">
                            <div className="btn btn-primary btn-floating m-1 face"> <FaFacebookF /></div>
                            <div className="btn btn-primary btn-floating m-1 twiter"> <FaTwitter /></div>
                            <div className="btn btn-primary btn-floating m-1 google"> <FaGoogle /></div>
                            <div className="btn btn-primary btn-floating m-1 instagram"> <FaInstagram /></div>
                            <div className="btn btn-primary btn-floating m-1 linkedin"> <FaLinkedin /></div>
                            <div className="btn btn-primary btn-floating m-1 github"> <FaGithub /></div>
                        </div>
                    </div>

                    <div className="text-center p-3 bg-dark">
                        © 2020 Copyright:Fran and Miguel
                    </div>
                </div>
            </Col>
        </>
    )
}

export default HomePage