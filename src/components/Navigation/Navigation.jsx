import './Navigation.css'
import { Navbar, Nav, NavDropdown, Col, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { MessageContext } from './../../context/message.context'
import SignupForm from '../SignupForm/SignupForm'
import LoginForm from '../LoginForm/LoginForm'
import MyModal from '../Modal/Modal'
import NewProductForm from '../NewProductForm/NewProductForm'
import OffCanvasEnd from '../OffCanvasEnd/OffCanvasEnd'



const Navigation = ({ setSend }) => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    const [modalInfo, setModalInfo] = useState({
        show: false,
        content: 'login'
    })

    const openModal = content => setModalInfo({ show: true, content })
    const closeModal = () => {
        setSend(false)
        setModalInfo({ ...modalInfo, show: false })
    }

    const { showMessage } = useContext(MessageContext)

    const fireFinalActions = () => {
        closeModal()
        // loadCoasters()
        showMessage('Completado', 'Nuevo Usuario')
    }

    const title = modalInfo.content === 'login' ? 'Inicio de sesión' : modalInfo.content === 'signup' ? 'Registro' : modalInfo.content === 'newProduct' ? 'NuevoProducto' : modalInfo.content === 'cart' ? 'Carrito' : 'hola'

    return (

        <Col xs={12} lg={12} className="text-white">
            <Navbar collapseOnSelect expand="lg" fixed="top" border="danger" className='p-3' >
                <Navbar.Brand><NavLink to="/">gelioX</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto"></Nav>

                    <Nav>
                        <NavLink to="/" className="nav-link me-3 mx-4">Inicio</NavLink>
                        <NavLink to="/productos" className="nav-link me-3 mx-4">Productos</NavLink>
                        <NavDropdown title="Usuario" id="collasible-nav-dropdown" className='me-3 mx-4' >

                            {
                                isLoggedIn
                                    ?
                                    user && <>
                                        <NavDropdown.Item><NavLink to="/perfil" className="nav-link justify-content-end text-dark">Hola, {user.username}</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/perfil" className="nav-link justify-content-end text-dark">Ver perfil</NavLink></NavDropdown.Item>
                                        {
                                            user.role == "SUPPLIER" && <>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item className="nav-link justify-content-end text-dark">Bienvenido, {user.role}</NavDropdown.Item>
                                            </>
                                        }
                                        {
                                            user.role == "ADMIN" && <>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item className="nav-link justify-content-end text-dark">Bienvenido, {user.role}</NavDropdown.Item>
                                                <NavDropdown.Item><NavLink to="/XXXXX" className="nav-link justify-content-end text-dark">BackOffice</NavLink></NavDropdown.Item>
                                            </>
                                        }
                                        {
                                            user.role !== "USER" && <>
                                                <NavDropdown.Item className="nav-link justify-content-end text-dark" onClick={() => openModal('newProduct')}>Nuevo Producto</NavDropdown.Item>
                                            </>
                                        }
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className="nav-link text-center text-primary" onClick={logOutUser}><NavLink to="/">Cerrar sesión</NavLink></NavDropdown.Item>
                                    </>
                                    :
                                    <>
                                        <NavDropdown.Item className="nav-link text-dark" onClick={() => openModal('signup')}>Registro</NavDropdown.Item>
                                        <NavDropdown.Item className="nav-link text-dark" onClick={() => openModal('login')}>Iniciar sesión</NavDropdown.Item>
                                    </>
                            }

                        </NavDropdown>
                        <Button variant="primary" onClick={() => openModal('cart')} className="me-2"><FaShoppingCart /></Button>

                    </Nav>
                </Navbar.Collapse >
            </Navbar>

            <MyModal title={title} show={modalInfo.show} close={closeModal}>
                {modalInfo.content === 'login' && <LoginForm fireFinalActions={fireFinalActions} />}
                {modalInfo.content === 'signup' && <SignupForm fireFinalActions={fireFinalActions} />}
                {modalInfo.content === 'newProduct' && <NewProductForm setSend={setSend} fireFinalActions={fireFinalActions} />}
                {modalInfo.content === 'cart' && <OffCanvasEnd fireFinalActions={fireFinalActions} />}
            </MyModal>
        </Col>
    )
}

export default Navigation
