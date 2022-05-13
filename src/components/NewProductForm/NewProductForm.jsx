import "./NewProductForm.css"

import { useState } from "react"
import { Form, Button } from "react-bootstrap"

import uploadService from "../../services/upload.service"
import productService from "../../services/product.service"

const NewProductForm = ({ fireFinalActions, setSend }) => {

    const [productDate, setproductDate] = useState({
        title: '',
        description: '',
        imageUrl: '',
        category: '',
        size: '',
        colors: '',
        price: 0,
        stock: 0
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.currentTarget

        setproductDate({
            ...productDate,
            [name]: value               // computed property names
        })
    }

    const handleSubmit = e => {

        e.preventDefault()

        productService
            .saveProduct(productDate)
            .then(response => {
                fireFinalActions()
                setSend(true)
            })
            .catch(err => console.log(err))
    }

    const handleImageUpload = (e) => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setproductDate({ ...productDate, imageUrl: data.cloudinary_url })
                console.log("ha funcionado")
            })
            .catch(err => console.log(err))
    }

    const { title, description, category, size, colors, price, stock } = productDate

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                <Form.Text className="text-muted">Mínimo 20 caracteres</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen (archivo)</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group>

            <Form.Control as='select' aria-label="Default select example" className="mb-3" name="category" value={category} onChange={handleInputChange}>
                <option value="sneakers">sneakers</option>
                <option value="apparel">apparel</option>
            </Form.Control>

            <Form.Control as='select' aria-label="Default select example" className="mb-3" name="size" value={size} onChange={handleInputChange}>
                <option value="XXL">XXL</option>
                <option value="Xl">Xl</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="S">S</option>
                <option value="XS">XS</option>
            </Form.Control>

            <Form.Group className="mb-3" controlId="colors">
                <Form.Label>Color</Form.Label>
                <Form.Control type="string" value={colors} onChange={handleInputChange} name="colors" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" value={price} onChange={handleInputChange} name="price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="stock">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" value={stock} onChange={handleInputChange} name="stock" />
            </Form.Group>


            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Creando la magia'}</Button>
        </Form>
    )
}

export default NewProductForm