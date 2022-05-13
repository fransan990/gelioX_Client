import { useContext } from "react"
import { Container } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"

const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (
        <Container>

            <h1>Hola, {user?.username}</h1>
        </Container>
    )
}

export default ProfilePage