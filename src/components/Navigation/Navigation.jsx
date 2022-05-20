import './Navigation.css'
import { Navbar, Nav, NavDropdown, Col, Button, Offcanvas, Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import { FaShoppingCart } from 'react-icons/fa';
import { MessageContext } from './../../context/message.context'
import SignupForm from '../SignupForm/SignupForm'
import LoginForm from '../LoginForm/LoginForm'
import MyModal from '../Modal/Modal'
import NewProductForm from '../NewProductForm/NewProductForm'

import CartPage from '../../pages/CartPage/CartPage'
import { CartContext } from '../../context/cart.context'

const Navigation = ({ setSend }) => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)
    const { cart } = useContext(CartContext)

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
        showMessage('Completado', 'Inicio de sesion')
    }

    const title = modalInfo.content === 'login' ? 'Inicio de sesión' : modalInfo.content === 'signup' ? 'Registro' : modalInfo.content === 'newProduct' ? 'NuevoProducto' : modalInfo.content === 'cart' ? 'Carrito' : 'hola'

    return (

        <Col xs={12} lg={12} className="mb-5">
            <Navbar collapseOnSelect expand="lg" border="danger" fixed="top" className='p-3  navbar-light bg-light opacity-75 fw-bold' >
                <Navbar.Brand><NavLink to="/" className="text-dark btn-lg">gelioX</NavLink></Navbar.Brand>
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
                                                <NavDropdown.Item className="nav-link text-center text-dark">Bienvenido, {user.role}</NavDropdown.Item>
                                                {/* <NavDropdown.Item><NavLink to="/XXXXX" className="nav-link justify-content-end text-dark">BackOffice</NavLink></NavDropdown.Item> */}
                                                <NavDropdown.Item className="nav-link text-center text-dark" onClick={() => openModal('newProduct')}>Nuevo Producto</NavDropdown.Item>

                                            </>
                                        }
                                        {
                                            user.role == "USER" && <>
                                                <NavDropdown.Item><NavLink to={'/productos-favoritos'} className="nav-link justify-content-end text-dark btn-floating">Productos Favoritos</NavLink></NavDropdown.Item>

                                            </>
                                        }
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className="nav-link text-center text-primary" onClick={logOutUser}><NavLink to="/" className="btn">Cerrar sesión</NavLink></NavDropdown.Item>
                                    </>
                                    :
                                    <>
                                        <NavDropdown.Item className="nav-link text-dark" onClick={() => openModal('signup')}>Registro</NavDropdown.Item>
                                        <NavDropdown.Item className="nav-link text-dark" onClick={() => openModal('login')}>Iniciar sesión</NavDropdown.Item>
                                    </>
                            }

                        </NavDropdown>
                        {isLoggedIn && <Button className="nav-link me-3 mx-4 bg-light border-0" onClick={handleShow}><FaShoppingCart className='FaShoppingCartClass' />
                            {(cart?.items.length > 0) && <Badge className='mx-2 badgeCart'>{cart?.items.length}</Badge>}</Button>}

                    </Nav>
                </Navbar.Collapse >
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='text-center'>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <CartPage />
                </Offcanvas.Body>
            </Offcanvas>

            <MyModal title={title} show={modalInfo.show} close={closeModal}>
                {modalInfo.content === 'login' && <LoginForm fireFinalActions={fireFinalActions} />}
                {modalInfo.content === 'signup' && <SignupForm fireFinalActions={fireFinalActions} />}
                {modalInfo.content === 'newProduct' && <NewProductForm setSend={setSend} fireFinalActions={fireFinalActions} />}
            </MyModal>
        </Col >
    )
}

export default Navigation
