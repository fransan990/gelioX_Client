import './Navigation.css'
import { Navbar, Nav, NavDropdown, Col, Button, Offcanvas } from 'react-bootstrap'
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
import CartPage from '../../pages/CartPage/CartPage'



const Navigation = ({ setSend }) => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [modalInfo, setModalInfo] = useState({
        show: false,
        content: 'login'
    })

    const openModal = content => setModalInfo({ show: true, content })
    const closeModal = () => {

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

        <Col xs={12} lg={12} className="mb-5">
            <Navbar collapseOnSelect expand="lg" border="danger" fixed="top" className='p-3  navbar-light bg-light opacity-75 fw-bold' >
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
                                                <NavDropdown.Item className="nav-link justify-content-end text-dark" onClick={() => openModal('newProduct')}>Nuevo Producto</NavDropdown.Item>

                                            </>
                                        }
                                        {
                                            user.role !== "USER" && <>
                                                <NavDropdown.Item><NavLink to={'/productos-favoritos'} className="nav-link justify-content-end text-dark btn-floating">Productos Favoritos</NavLink></NavDropdown.Item>

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

                        <Button className="nav-link me-3 mx-4" onClick={handleShow}>Cart</Button>

                    </Nav>
                </Navbar.Collapse >
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='text-center'>Carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <CartPage />
                </Offcanvas.Body>
            </Offcanvas>

            <MyModal title={title} show={modalInfo.show} close={closeModal}>
                {modalInfo.content === 'login' && <LoginForm fireFinalActions={fireFinalActions} />}
                {modalInfo.content === 'signup' && <SignupForm fireFinalActions={fireFinalActions} />}
                {modalInfo.content === 'newProduct' && <NewProductForm setSend={setSend} fireFinalActions={fireFinalActions} />}
                {/* {modalInfo.content === 'cart' && <OffCanvasEnd fireFinalActions={fireFinalActions} />} */}
            </MyModal>
        </Col >
    )
}

export default Navigation
