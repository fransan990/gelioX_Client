import axios from 'axios'

class OrderService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/order`
        })
    }

    createOrder = order => {
        return this.app.post('/createOrder', order)
    }
    getOrder = order => {
        return this.app.get('/getOrder', order)
    }
}

const orderService = new OrderService()

export default orderService