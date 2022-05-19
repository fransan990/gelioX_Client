import React, { createContext, useState, useEffect } from 'react'
import productService from '../services/product.service'


const ProductContext = createContext()

function ProductProviderWrapper(props) {

    const [products, setProducts] = useState()
    const [updateStatus, setUpdateStatus] = useState(true)
    const [searchQuery, setSearchQuery] = useState()


    useEffect(() => {
        updateStatus && loadproducts()
    }, [updateStatus, searchQuery])

    // useEffect(() => {
    //     console.log('susmuertos', searchQuery)
    // }, [searchQuery , ])

    console.log('susmnnuertos2', searchQuery)

    const loadproducts = () => {

        productService
            .productSearch(searchQuery)
            .then(({ data }) => {
                console.log('estoy renovandome los productos')
                setProducts(data)
                // setFilteredProducts(data)
                setUpdateStatus(false)
            })
            .catch(err => console.log(err))
    }


    return (
        <ProductContext.Provider value={{ products, setProducts, setUpdateStatus, setSearchQuery, searchQuery, loadproducts }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProviderWrapper }