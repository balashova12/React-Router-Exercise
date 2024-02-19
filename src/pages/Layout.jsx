import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';

function Navigation() {
  const [activePage, setActivePage] = useState('Home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Web Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => handlePageChange('Home')}>Home</Nav.Link>
              <Nav.Link onClick={() => handlePageChange('Blogs')}>Blogs</Nav.Link>
              <Nav.Link onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="content">
        {activePage === 'Home' && <Home isHome={true} />}
        {activePage === 'Blogs' && <Blogs />}
        {activePage === 'Contact' && <Contact />}
      </div>
    </>
  );
}

export default Navigation;