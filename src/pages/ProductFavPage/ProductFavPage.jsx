import { useEffect, useState } from "react"
import { Col,Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ProductCard from "../../components/ProductCard/ProductCard"
import productService from "../../services/product.service"
import userService from "../../services/user.service"

const ProductFavPage = () => {

    const [productsFav, setProductsFav] = useState([])

    const loadFavProducts = () => {
        userService
            .getUserDetails()
            .then(({ data }) => {
                setProductsFav(data.favProducts)
            })
            .catch(err => console.log(err))
    }

    const removeFromFav = (product) => {        
        const {_id}=product
        console.log(_id)
        productService
            .productUnFav(_id)
            .then(({ data }) => {
                console.log('quitado de favs', data)
                loadFavProducts()
                // setProductsFav(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadFavProducts()
    }, [])


    return (

        <Col lg={12} className="mt-5 ">
            <h4>Estamos</h4>
            {
                productsFav.map(product => {
                    return (
                        <Col md={{ span: 4 }} key={product._id} className="mt-3">
                            <div>
                                <div>
                                    <img src={product.imageUrl} />
                                    <div>{product.title}</div>
                                    <Button onClick={()=>removeFromFav(product)}>hola</Button>
                                </div>
                                {/* <ul className="card-social">
                                    <li className="card-social__item">

                                    </li>
                                    <li className="card-social__item">

                                        <Link to={`/${_id}/productsFav/`} className='btn btn-danger btn-floating m-1 corazon'><FaHeart /></Link>

                                    </li>
                                    <li className="card-social__item">

                                        <Link to={`/detalles/${_id}`} className='btn btn-floating m-1'><FaSearch /></Link>


                                    </li>
                                </ul> */}
                            </div>
                        </Col>
                    )
                })
            }
        </Col>


    )



}

export default ProductFavPage