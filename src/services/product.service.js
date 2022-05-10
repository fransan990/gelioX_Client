import axios from 'axios'

class CoastersService {

    constructor() {

        this.app = axios.create({ baseURL: 'http://localhost:5005/api/coasters' })

        this.app.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }

            }
            return config

        })
    }

    getAllProducts = () => {
        return this.app.get('/getAllProducts')
    }

    getOneProduct = id => {
        return this.app.get(`/getOneProduct/${id}`)
    }

    saveProduct = product => {
        return this.app.post(`/saveProduct`, product)
    }

    deleteProduct = product => {
        return this.app.post(`/productdelete/${id}`)
    }

    savedCart = id => {
        return this.app.post(`/savedCart/${id}`)
    }

    productLike = id => {
        return this.app.post(`/productlike/${id}`)
    }

}

const coastersService = new CoastersService()

export default coastersService