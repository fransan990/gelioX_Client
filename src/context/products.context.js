import React, { createContext, useState, useEffect } from 'react'
import productService from '../services/product.service'

const ProductContext = createContext()
//Hacer que funcione todos los filtros 

function ProductProviderWrapper(props) {

    const [products, setProducts] = useState()
    const [updateStatus, setUpdateStatus] = useState(true)
    const [searchQuery, setSearchQuery] = useState({
        form: '',
        size: '',
        category: ''
    })


    useEffect(() => {
        updateStatus && loadproducts()
    }, [updateStatus, searchQuery])

    useEffect(() => {
        console.log('susmuertos ----->', searchQuery)
    }, [searchQuery])

    console.log('susmnnuertos1 products-Contex', searchQuery)

    const loadproducts = () => {

        productService
            .productSearch(searchQuery)
            .then(({ data }) => {
                setProducts(data)
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