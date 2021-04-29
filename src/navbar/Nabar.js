import React, { Component } from 'react'
import {Nav,Navbar,Row,Col} from 'react-bootstrap'
import './navbar.css'



class Nabar extends Component
{

  render()
  {
    return  (
      <div className="cont  container-fluid  " >
        

  

        <div className="nb">
          
          <Navbar className="ra" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><img  className="img" src="./logo.png" alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Home</Nav.Link>
      <Nav.Link href="#deets">menu</Nav.Link>
      <Nav.Link href="#deets">Favorite</Nav.Link>
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>

      <div>
      <Row className=" aa justify-content-md-center">
    <Col xs lg="8" sm={4}>
    Cooking for all
    </Col>
    
  </Row>

      </div>

      </div>

);

  }
    
}

export default Nabar;







