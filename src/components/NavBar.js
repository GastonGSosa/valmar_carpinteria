import {Container, Nav, Navbar} from "react-bootstrap"
import CartWidget from "./CartWidget.js";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Valmar Carpinteria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Interior</Nav.Link>
            <Nav.Link href="#pricing">Exterior</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>

    )
}

export default NavBar;