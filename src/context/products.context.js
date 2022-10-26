import React, { createContext, useState, useEffect } from 'react'
import productService from '../services/product.service'

const ProductContext = createContext()

function ProductProviderWrapper(props) {

    const [products, setProducts] = useState()
    const [searchQuery, setSearchQuery] = useState({
        string: '',
        size: '',
        category: ''
    })

    useEffect(() => {
        loadproducts()
    }, [])

    const loadproducts = () => {
        productService
            .getAllProducts()
            .then(({ data }) => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }

    const filterProducts = () => {
        productService
            .productSearch(searchQuery)
            .then(({ data }) => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <ProductContext.Provider value={{ products, setProducts, setSearchQuery, searchQuery, loadproducts, filterProducts }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProviderWrapper }