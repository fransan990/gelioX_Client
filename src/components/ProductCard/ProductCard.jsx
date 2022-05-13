import './ProductCard.css'
import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { AuthContext } from './../../context/auth.context'
import { useContext } from 'react'


const ProductCard = ({ _id, imageUrl, title, owner }) => {

    const { user } = useContext(AuthContext)


    console.log("titulo", title)
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title} hola</Card.Title>
                <div className="d-grid gap-2">
                    {/* hacer el editar */}
                    <Link to={`/detalles/${_id}`} className="btn btn-dark">Ver detalles</Link>
                    <Button variant='warning' onClick={() => alert('hacer')}>Editar</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

//comprobar el owner
// owner && owner === user?._id && boton que queremos que aparezca

export default ProductCard