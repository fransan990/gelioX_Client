import axios from 'axios'

class UserService {

    constructor() {

        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/user` })

        this.app.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })
    }

    getUserDetails = () => {
        return this.app.get('/profile')
    }

}

const userService = new UserService()

export default userService