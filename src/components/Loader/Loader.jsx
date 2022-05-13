import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        //barra cargando tipo youtube
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default Loader