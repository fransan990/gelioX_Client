import React, { createContext, useState, useEffect } from 'react'
import productService from '../services/product.service'


const ProductContext = createContext()

function ProductProviderWrapper(props) {

    const [products, setProducts] = useState()
    const [updateStatus, setUpdateStatus] = useState(true)

    useEffect(() => {
        updateStatus && loadproducts()
    }, [updateStatus])

    const loadproducts = () => {

        productService
            .getAllProducts()
            .then(({ data }) => {
                console.log('estoy renovandome los productos')
                setProducts(data)
                setUpdateStatus(false)
            })
            .then(err => console.log(err))
    }

    return (
        <ProductContext.Provider value={{ products, setUpdateStatus }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProviderWrapper }