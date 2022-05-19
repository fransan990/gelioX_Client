import { Container, Modal, Button, Col } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import ProductsList from '../../components/ProductList/Productlist'
import { ProductContext } from '../../context/products.context'
import './ProductsPage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import FilterSize from '../../components/FilterSize/FilterSize'

const ProductsPage = () => {

    const { products } = useContext(ProductContext)

    return (

        <Col md={12}>
            <h1>Productos</h1>
            <hr />
            <SearchBar />
            {/* <FilterSize /> */}



            <ProductsList products={products} />
        </Col>
    )
}

export default ProductsPage