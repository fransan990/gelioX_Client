import { useContext, useEffect, useState } from "react"
import { Col, Form } from "react-bootstrap"
import { ProductContext } from "../../context/products.context"
import productService from "../../services/product.service"
import "./SearchBar.css"


const SearchBar = () => {

    const { setUpdateStatus, setSearchQuery, searchQuery } = useContext(ProductContext)

    const [searchData, setsearchData] = useState({
        form: searchQuery.form,
        size: searchQuery.size,
        category: searchQuery.category
    })

    useEffect(() => {
        setSearchQuery(searchData)
    }, [searchData])

    const handleSubmit = e => {
        e.preventDefault()
        setUpdateStatus(true)
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setsearchData({ ...searchData, [name]: value })
    }

    const { form, size, category } = searchData

    // useEffect(() => {
    //     console.log('la data --->', searchData)
    // }, [searchData])
    // console.log("size---", size)
    // console.log("form---", form)
    // console.log("category---", category)



    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Col lg={8} className="mx-auto m-0 group">
                    {/* <Form onKeyUp={handleSubmit} > */}
                    <Form.Group className="mb-5" controlId="form">
                        {/* <Form.Label>Buscador</Form.Label> */}
                        <Form.Control type="text" onChange={handleInputChange} name="form" value={form} className="input" placeholder="Escribe para buscar" />

                    </Form.Group>
                    {/* </Form > */}
                </Col>
                {/* <Form onChange={handleSubmit} > */}
                <Form.Control as='select' aria-label="Default select example" className="mb-3" name="size" value={size} onChange={handleInputChange}>
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