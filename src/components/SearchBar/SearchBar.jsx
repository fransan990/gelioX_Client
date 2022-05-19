import { useContext, useEffect, useState } from "react"
import { Col, Form } from "react-bootstrap"
import { ProductContext } from "../../context/products.context"
import productService from "../../services/product.service"
import "./SearchBar.css"


const SearchBar = () => {

    const { setUpdateStatus, setSearchQuery } = useContext(ProductContext)

    const [searchData, setsearchData] = useState({
        form: '',
    })

    const handleSubmit = e => {
        e.preventDefault()
        setSearchQuery(form)
        setUpdateStatus(true)
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setsearchData({ ...searchData, [name]: value })
    }
    // useEffect(() => {
    //     console.log('la data --->', searchData)
    // }, [searchData])
    const { form } = searchData

    return (

        <Col lg={8} className="mx-auto m-0 group">
            <Form onKeyUp={handleSubmit} >
                <Form.Group className="mb-5" controlId="form">
                    {/* <Form.Label>Buscador</Form.Label> */}
                    <Form.Control type="text" onChange={handleInputChange} name="form" value={form} className="input" placeholder="Escribe para buscar" />

                </Form.Group>
            </Form >
        </Col>


    )
}

export default SearchBar