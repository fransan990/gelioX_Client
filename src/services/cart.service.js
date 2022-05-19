import axios from 'axios'

class CartService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cart`
        })

        this.app.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })
    }

    getCart = cartId => {
        return this.app.get('/getCart', cartId)
    }
    addItem = (productId, productQuantity) => {
        return this.app.post('/addItem', { productId, productQuantity })
    }
    updateQuantity = (productId, newQuantity) => {
        return this.app.put('/updateQuantity', { productId, newQuantity})
    }
    deleteItem = (productId) => {
        return this.app.put('/deleteItem', {productId})
    }
    getAllItems = () => {
        return this.app.get('/getAllItems')
    }
}

const cartService = new CartService()

export default cartService