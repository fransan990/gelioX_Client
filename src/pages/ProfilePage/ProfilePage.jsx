import { useContext, useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"


//no funciona 

const ProfilePage = () => {

    // // const { user } = useContext(AuthContext)

    const [profile, setProfile] = useState([])

    const perfil1 = () => {

        userService
            .getUserDetails()
            .then(({ data }) => {
                // console.log("la data-", data)
                setProfile(data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        perfil1()
    }, [])

    console.log("perfil", profile)
    return (
        <Col lg={6} className="mx-auto m-0 mt-5 border border-dark border-4 border-dark ">
            <h4 className="mt-4 text-center">Bienvenido al perfil</h4>
            <hr />
            <Row>
                <Col md={{ span: 12 }} className="mt-3 text-center ">
                    <div>
                        <div>
                            <div className="mb-3">Nombre: {profile.fullName}</div>
                            <div className="mb-3">Email: {profile.email}</div>
                            <div className="mb-3">Nunero de telefono: {profile.phoneNumbe}</div>
                            <div className="mb-3">Codigo postal: {profile.postalCode}</div>
                        </div>

                    </div>
                </Col>
                <Col lg={6} className="mx-auto m-0 mb-4">
                    <Link to="/productos" className='d-block mt-5 text-center'>
                        <Button variant="dark">Volver</Button>
                    </Link>
                </Col>
            </Row>
        </Col>

    )
}

export default ProfilePage