import { Container, Row } from 'react-bootstrap'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import UserMessage from './components/UserMessage/UserMessage'
import AppRoutes from './routes/AppRoutes'

function App() {


  return (
    <>
      <Container fluid>
        <Row>
          <Navigation />
          <AppRoutes />
          <UserMessage />
        </Row>
      </Container>

    </>
  )
}

export default App
