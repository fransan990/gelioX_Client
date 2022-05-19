import { Routes, Route } from 'react-router-dom'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import PrivateRoute from "./PrivateRoute"
import HomePage from "../pages/HomePage/HomePage"
import ProductsPage from '../pages/ProductsPage/ProductsPage'
import ProductDetailsPage from '../pages/ProductsDetailsPage/ProductsDetailsPage'
import CartPage from '../pages/CartPage/CartPage'


const AppRoutes = ({ setInProductsPage, send }) => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registro" />
            <Route path="/productos" element={<ProductsPage setInProductsPage={setInProductsPage} send={send} />} />
            <Route path="/detalles/:product_id" element={<ProductDetailsPage />} />
            <Route path="/inicio-sesion" />
            <Route path="/perfil" element={<PrivateRoute />}>
                <Route path="" element={<ProfilePage />} />
            </Route>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="*" element={<h1>Esto es un 404, Algo seguro que tenemos mal </h1>} />
        </Routes>
    )
}

export default AppRoutes