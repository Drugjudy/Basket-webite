
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar,  Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { useState } from 'react';




 
 const Nab = () => {

    return (

<Navbar id="top"  variant='light' >
    <Container>
    <Navbar.Brand href="/">DrugBasket</Navbar.Brand>
    <Nav className="justify-content-center">
      <Nav.Link href="/items">Items</Nav.Link>
    
      <Nav.Link href="/login">Login</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>

    );
};

export default Nab;