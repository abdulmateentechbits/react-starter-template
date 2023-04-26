import React, { useState } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">My App</NavbarBrand>
        <NavbarToggler onClick={toggleSidebar} />
        <Collapse isOpen={isSidebarOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Link 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Link 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Link 3</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container fluid>
        <Row>
          <Col md="2" className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <Nav vertical>
              <NavItem>
                <NavLink href="/components/">Link 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Link 2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Link 3</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="10" className="main-content">
            <h1>Main Content Area</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero non blandit lacinia, est quam aliquam leo, id laoreet nunc ex et nisi. Donec rutrum justo vel magna dictum, eget gravida ipsum aliquet. Vestibulum ac orci et eros pretium vulputate ac sed ex. Sed sollicitudin, felis sed malesuada blandit, turpis est lobortis enim, in dapibus purus ipsum non magna. Fusce euismod neque nisi, nec tempor mauris iaculis in. Nullam blandit ut sem in rhoncus. Nulla facilisi. Aliquam erat volutpat. Nam aliquam, eros in feugiat tristique, ex odio malesuada lacus, eu finibus nunc sapien vel nunc. Sed sodales euismod sapien sit amet rhoncus.</p>
          </Col>
        </Row>
      </Container>
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <p>Footer content goes here.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default App;
