import axios from 'axios'

class CartService {
    constructor() {
        this.app= axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cart`
        })
    }

    createCart = cart => {
        return this.app.post('/createCart', cart)
    }
    addItem = cart => {
        return this.app.post('/addItem', cart)
    }
    updateQuantity = cart => {
        return this.app.put('/updateQuantity', cart)
    }
    deleteItem = cart => {
        return this.app.delete('/deleteItem', cart)
    }
    getAllItems = cart => {
        return this.app.get('/getAllItems', cart)
    }
}

const cartService = new CartService()

export default cartService