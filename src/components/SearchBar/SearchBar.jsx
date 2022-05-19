import { useContext, useEffect, useState } from "react"
import { Col, Form } from "react-bootstrap"
import { ProductContext } from "../../context/products.context"
import productService from "../../services/product.service"
import "./SearchBar.css"


const SearchBar = () => {

    const { filterProducts, setSearchQuery, searchQuery } = useContext(ProductContext)

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSearchQuery({ ...searchQuery, [name]: value })
    }

    useEffect(() => filterProducts(), [searchQuery])

    const { string, size, category } = searchQuery

    return (
        <>
            <Form>
                <Col lg={8} className="mx-auto m-0 group">
                    {/* <Form onKeyUp={handleSubmit} > */}
                    <Form.Group className="mb-5" controlId="form">
                        {/* <Form.Label>Buscador</Form.Label> */}
                        <Form.Control type="text" onChange={handleInputChange} name="string" value={string} className="input" placeholder="Escribe para buscar" />
                    </Form.Group>
                    {/* </Form > */}
                </Col>
                {/* <Form onChange={handleSubmit} > */}
                <Form.Control as='select' aria-label="Default select example" className="mb-3" name="size" value={size} onChange={handleInputChange}>
                    {/* <option value="Seleciona">Selecciona un valor</option> */}
                    <option value="XXL">XXL</option>
                    <option value="Xl">Xl</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="S">S</option>
                    <option value="XS">XS</option>
                </Form.Control>
                {/* </Form> */}
                {/* <Form onChange={handleSubmit} > */}
                <Form.Control as='select' aria-label="Default select example" className="mb-3" name="category" value={category} onChange={handleInputChange}>
                    {/* <option value="Seleciona">Selecciona un valor</option> */}
                    <option value="Nike">Nike</option>
                    <option value="sneakers">sneakers</option>
                    <option value="apparel">apparel</option>
                </Form.Control>
                {/* </Form> */}
            </Form>

        </>

    )
}

export default SearchBar