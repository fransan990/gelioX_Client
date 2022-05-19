import { useContext, useEffect, useState } from "react"
import { Col, Container } from "react-bootstrap"

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
                console.log(data)
                setProfile(data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        perfil1()
    }, [])

    console.log("perfil", profile)
    return (
        <Col lg={12} className="mt-5 ">
            <h4>Estamos</h4>
            {
                profile.map(user => {

                    return (
                        <Col md={{ span: 4 }} key={user._id} className="mt-3">
                            <div>
                                <div>
                                    {/* <img src={product.imageUrl} /> */}
                                    <div>{user.username}</div>
                                </div>
                                {/* <ul className="card-social">
                                    <li className="card-social__item">

                                    </li>
                                    <li className="card-social__item">

                                        <Link to={`/${_id}/productsFav/`} className='btn btn-danger btn-floating m-1 corazon'><FaHeart /></Link>

                                    </li>
                                    <li className="card-social__item">

                                        <Link to={`/detalles/${_id}`} className='btn btn-floating m-1'><FaSearch /></Link>


                                    </li>
                                </ul> */}
                            </div>
                        </Col>
                    )
                })
            }
        </Col>

    )
}

export default ProfilePage