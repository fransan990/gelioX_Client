import { Container, Row, Col } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import ProductsList from '../../components/ProductList/Productlist'
import { ProductContext } from '../../context/products.context'
import './ProductsPage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import FilterSize from '../../components/FilterSize/FilterSize'
import "aos/dist/aos.css"
import Aos from "aos";



const ProductsPage = () => {

    const { products } = useContext(ProductContext)

    return (

        <Col md={12} className="mt-5">
            <Row>
                <Col lg={12} className="mx-auto m-0 bg-dark p-5">
                    <h2 className='text-center text-white mb-3 mt-4' data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">Productos</h2>
                    <p className='text-center text-white w-50 mx-auto m-0 pb-5' data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">Don't just read The Times — wear it! This collection features apparel that bears our striking Gothic nameplate, an iconic part of our identity since 1851.</p>

                </Col>
                <Col lg={12} className="colorFiltro">
                    <SearchBar />
                </Col>

                {/* <FilterSize /> */}
            </Row>




            <ProductsList products={products} />
        </Col>
    )
}

export default ProductsPage