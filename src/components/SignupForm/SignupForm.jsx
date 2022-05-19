import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
// import { useNavigate } from 'react-router-dom'

const SignupForm = ({ fireFinalActions }) => {

    const [signupData, setSignupData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        postalCode: '',

    })

    // const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        authService
            .signup(signupData)
            .then(res => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const { fullName, username, password, email, phoneNumber, postalCode } = signupData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="fullName" value={fullName} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" onChange={handleInputChange} name="username" value={username} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={handleInputChange} name="email" value={email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" onChange={handleInputChange} name="password" value={password} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneNumber">
                <Form.Label>Número de teléfono</Form.Label>
                <Form.Control type="number" onChange={handleInputChange} name="phoneNumber" value={phoneNumber} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="postalCode">
                <Form.Label>Codigo postal</Form.Label>
                <Form.Control type="number" onChange={handleInputChange} name="postalCode" value={postalCode} />
            </Form.Group>

            <Button variant="dark" type="submit">Registrarme</Button>
        </Form>

    )
}

export default SignupForm