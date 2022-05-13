import { Container, Modal, Button, Col } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import ProductsList from '../../components/ProductList/Productlist'
import productService from '../../services/product.service'
import './ProductsPage.css'

const ProductsPage = ({ setInProductsPage, send }) => {

    const [products, setproducts] = useState([])

    useEffect(() => {
        loadproducts()
        setInProductsPage(true)

        return () => {
            setInProductsPage(false)
        }
    }, [send])

    const loadproducts = () => {
        productService
            .getAllProducts()
            .then(({ data }) => {
                console.log('la data --->', data)
                setproducts(data)
            })
            .then(err => console.log(err))
    }

    console.log("products", products)
    return (

        <Col md={12} className=" distanciadelNavbar">
            <h1>Productos</h1>
            <hr />
            <ProductsList products={products} />
        </Col>

    )
}

export default ProductsPage