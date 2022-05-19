import axios from 'axios'

class ProductService {

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/product`
        })

        this.app.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

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
        return this.app.post('/saveProduct', product)
    }
    //da error por el id
    // deleteProduct = product => {
    //     return this.app.post(`/productdelete/${id}`)
    // }

    savedCart = id => {
        return this.app.post(`/savedCart/${id}`)
    }

    productLike = id => {
        return this.app.post(`/productlike/${id}`)
    }

    productSearch = (query = '') => {
        return this.app.get(`/listProductSearch/?query=${query}`)
    }
    productFilterSize = form => {
        return this.app.get(`/listProductSize/?form=${form}`)
    }

    productFav = id => {
        return this.app.post(`/${id}/productFav`)
    }


}

const productService = new ProductService()

export default productService