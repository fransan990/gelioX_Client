import axios from 'axios'

class CommentService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/comment`
        })

        this.app.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })
    }
    createComment=(id, description)=>{
        return this.app.post('/createComment', {id, description})
    }

    getAllComments=(id)=>{
        return this.app.get('/getAllComments', id)
    }
}

const commentService = new CommentService()

export default commentService