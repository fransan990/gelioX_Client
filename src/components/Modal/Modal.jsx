import { Modal } from 'react-bootstrap'
import './Modal.css'

const MyModal = ({ title, show, close, children }) => {

    return (

        <Modal show={show} onHide={close} >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal >

    )
}

export default MyModal