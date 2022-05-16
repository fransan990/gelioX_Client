import React, { createContext, useState, useEffect } from 'react'
import productService from '../services/product.service'


const ProductContext = createContext()

function ProductProviderWrapper(props) {

    const [products, setproducts] = useState()


    useEffect(() => {
        loadproducts()
    })

    const loadproducts = () => {
        productService
            .getAllProducts()
            .then(({ data }) => {
                setproducts(data)
            })
            .then(err => console.log(err))
    }

    return (
        <ProductContext.Provider value={{ products, setproducts }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProviderWrapper }