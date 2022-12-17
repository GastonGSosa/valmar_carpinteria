import {Container, Nav, Navbar} from "react-bootstrap"
import CartWidget from "./CartWidget.js";
import { Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Valmar Carpinteria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/category/Muebles">Muebles</Nav.Link>
            <Nav.Link as={Link} to="/category/Adornos">Adornos</Nav.Link>
            <Nav.Link as={Link} to="/category/Cocina">Cocina</Nav.Link>
          </Nav>
          <Nav.Link as={Link} to="/cart/">
            <CartWidget/>
          </Nav.Link>
        </Container>
      </Navbar>

    )
}

export default NavBar;