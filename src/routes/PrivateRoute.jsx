import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { MessageContext } from "../context/message.context"
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    const { isLoggedIn, isLoading } = useContext(AuthContext)
    const { showMessage } = useContext(MessageContext)

    if (isLoading) {
        return "cargando....."
    }

    if (!isLoggedIn) {
        showMessage('Desautorizad@', 'Inicia sesión para acceder')
        return <Navigate to="/inicio-sesion" />
    }

    return <Outlet />
}

export default PrivateRoute