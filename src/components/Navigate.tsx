import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { INavigate } from '../medels/Navigate';

interface NavigateProps {
  navigate: INavigate
}

function Navigate(props: NavigateProps) {

    return (
        <>
        <Container>
          <Row>
          <Col>
          <Navbar bg="primary" variant="dark" className='px-4 shadow mt-1 mb-2'>
             <Navbar.Brand href="/" className=''>{props.navigate.title}</Navbar.Brand>
              <Nav className="">
                {props.navigate.items.map((items) => (
                 <Nav.Link key={items.id} href={items.link}>{items.title}</Nav.Link>
                ))}
              </Nav>
          </Navbar>
          </Col>
          </Row>
        </Container>
        </>
      );
    }

export default Navigate
