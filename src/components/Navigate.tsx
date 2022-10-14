import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigate() {
    
   var menuList=['Главная','Справка', 'О сайте']
    return (
        <>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
              {menuList.map((item) => (
                <Nav.Link key={item} href='#home'>{item}</Nav.Link>
              ))}
              </Nav>
            </Container>
          </Navbar>
        </>
      );
    }

export default Navigate
