import { Container, Modal, Button, Col } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import ProductsList from '../../components/ProductList/Productlist'
import { ProductContext } from '../../context/products.context'
import './ProductsPage.css'


const ProductsPage = () => {

    const { products } = useContext(ProductContext)

    console.log("contexto--", products)

    return (

        <Col md={12} className="distanciadelNavbar">
            <h1>Productos</h1>
            <hr />
            <ProductsList products={products} />
        </Col>

    )
}

export default ProductsPage