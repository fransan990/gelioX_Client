import { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import UserMessage from './components/UserMessage/UserMessage'
import AppRoutes from './routes/AppRoutes'

function App() {

  // pruebita de estados para saber si estamos en la pagina de productos
  const [inProductsPage, setInProductsPage] = useState(false)
  const [send, setSend] = useState(false)

  return (
    <>
      <Container fluid>
        <Row>
          <Navigation setSend={setSend} />
          <AppRoutes setInProductsPage={setInProductsPage} send={send} />
          <UserMessage />
        </Row>
      </Container>

    </>
  )
}

export default App
