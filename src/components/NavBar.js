import {Container, Nav, Navbar} from "react-bootstrap"
import CartWidget from "./CartWidget.js";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Valmar Carpinteria</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/category/Muebles">Muebles</Link>
            <Link to="/category/Adornos">Adornos</Link>
            <Link to="/category/Cocina">Cocina</Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>

    )
}

export default NavBar;