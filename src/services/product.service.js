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

    savedCart = id => {
        return this.app.post(`/savedCart/${id}`)
    }

    productLike = id => {
        return this.app.post(`/productlike/${id}`)
    }

    productSearch = (searchQuery) => {

        let fullQuery = `/listProductSearch/?`

        for (let key in searchQuery) {
            fullQuery += `${key}=${searchQuery[key]}&`
        }

        console.log('la query que llega --------> ', fullQuery)

        return this.app.get(fullQuery)

    }

    productFilterSize = form => {
        return this.app.get(`/listProductSize/?form=${form}`)
    }

    productFav = id => {
        return this.app.post(`/${id}/productFav`)
    }
    productUnFav = id => {
        return this.app.post(`/${id}/productUnFav`)
    }
    visitCounter = id => {
        return this.app.post(`/visitCounter/${id}`)
    }

}

const productService = new ProductService()

export default productService