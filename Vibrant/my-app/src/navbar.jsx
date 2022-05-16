
import React from "react";

import { Navbar , Container, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Heading } from '@chakra-ui/react';

function Menu() {
    return (
      <div className="Nav">
          <Navbar bg="light" variant="light">
    <Container>
    
    <Nav className="me-auto" >
      <Nav.Link href="#home" className="m-2">
          <Heading as='h5' size='sm'>
              Home
          </Heading>
          </Nav.Link>
      <Nav.Link href="#shop" className="m-2">
      <Heading as='h5' size='sm'>
              Shop
          </Heading>
      </Nav.Link>
      <Nav.Link href="#Trending" className="m-2">
      <Heading as='h5' size='sm'>
              Trending
          </Heading>
      </Nav.Link>
    </Nav>
    <Navbar.Brand className="me-auto" href="#home">
        <img src='Vibrant_Logo.png'/>
    </Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Link href="#subscription" className="m-2">
      <Heading as='h5' size='sm'>
              Subscription
          </Heading>
      </Nav.Link>
      <Nav.Link href="#sign-in" className="m-2">
      <Heading as='h5' size='sm'>
              Sign-in
          </Heading>
      </Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
        
      </div>
    );
  }
  
  export default Menu;