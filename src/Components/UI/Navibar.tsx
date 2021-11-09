// import {Link} from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import React from 'react';

const Navibar : React.FC = () => {
    return (
      <>
        <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Libreria</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                  <Link className="nav-link" to='/'>Home</Link>
                  <Link className="nav-link" to='/books'>Libri</Link>
                  <Link className="nav-link" to='/books/new'>Crea Libri</Link>
                  <Link className="nav-link" to='/authors'>Autori</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
}

export default Navibar;