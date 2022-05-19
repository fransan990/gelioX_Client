import { useContext, useState } from "react"
import { Form } from "react-bootstrap"
import { ProductContext } from "../../context/products.context"




const FilterSize = () => {

    const { setSearchQuery, setFilterQuery } = useContext(ProductContext)

    const [filterData, setfilterData] = useState({
        size: '',
    })

    const handleSubmit = e => {
        e.preventDefault()
        setSearchQuery(filterData.size)
        setFilterQuery(true)
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setfilterData({ ...filterData, [name]: value })
    }
    const { size } = filterData

    console.log("tamaño--", size)




    return (

        <Form onChange={handleSubmit} >
            <Form.Control as='select' aria-label="Default select example" className="mb-3" name="size" value={size} onChange={handleInputChange}>
                <option value="XXL">XXL</option>
                <option value="Xl">Xl</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="S">S</option>
                <option value="XS">XS</option>
            </Form.Control>
        </Form>

    )
}

export default FilterSize
