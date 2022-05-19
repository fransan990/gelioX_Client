import axios from 'axios'

class OrderService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/order`
        })

        this.app.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })
    }

    createOrder = (cartId, orderDetails) => {
        return this.app.post(`/createOrder/${cartId}`, orderDetails)
    }

    getOrder = order => {
        return this.app.get('/getOrder', order)
    }
}

const orderService = new OrderService()

export default orderService