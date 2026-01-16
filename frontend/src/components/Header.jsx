import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'react-feather';
const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav-id" />
          <Navbar.Collapse id="nav-id">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart">
                <ShoppingCart />
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <User />
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
