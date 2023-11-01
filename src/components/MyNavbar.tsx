import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import sunimage from '../assets/sun.webp'
import { LinkContainer } from 'react-router-bootstrap'

 function MyNavbar() {
  
  const expand = 'md'

  return (
    <>
        <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark" className="bg-body-tertiary mb-3" collapseOnSelect>      
          <Container fluid >
            <img src = {sunimage} width='40' height='40' alt='sunimage' />
            <Navbar.Brand href="#">Space Travelers' Hub</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header >
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to='/'><Nav.Link>Rockets</Nav.Link></LinkContainer>
                  <LinkContainer to='/dragons'><Nav.Link>Dragons</Nav.Link></LinkContainer>
                  <LinkContainer to='/missions'><Nav.Link>Missions</Nav.Link></LinkContainer>
                  <LinkContainer to='/myprofile'><Nav.Link>My Profile</Nav.Link></LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default MyNavbar;
