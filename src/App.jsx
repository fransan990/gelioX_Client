import { Container, Row } from 'react-bootstrap'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import UserMessage from './components/UserMessage/UserMessage'
import AppRoutes from './routes/AppRoutes'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
