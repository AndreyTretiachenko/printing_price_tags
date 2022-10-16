import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { INavigate } from '../models';

interface NavigateProps {
  navigate: INavigate
}

function Navigate(props: NavigateProps) {

    return (
        <>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
              {props.navigate.items.map((items) => (
                <Nav.Link key={items.id} href={items.link}>{items.title}</Nav.Link>
              ))}
              </Nav>
            </Container>
          </Navbar>
        </>
      );
    }

export default Navigate
