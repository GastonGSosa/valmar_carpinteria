import {Container, Nav, Navbar} from "react-bootstrap"
import CartWidget from "./CartWidget.js";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Valmar Carpinteria</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to="/category/Muebles"><Nav.Link href="Muebles">Muebles</Nav.Link></Link>
            <Link to="/category/Adornos"><Nav.Link href="Adornos">Adornos</Nav.Link></Link>
            <Link to="/category/Cocina"><Nav.Link href="Cocina">Cocina</Nav.Link></Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>

    )
}

export default NavBar;