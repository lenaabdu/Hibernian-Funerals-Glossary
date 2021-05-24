import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form  from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button  from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col  from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


class Menubar extends React.Component {


render() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
   <div className="align-items-center" > <Navbar.Toggle  aria-controls="responsive-navbar-nav" /> </div>
    <Navbar.Collapse  className="justify-content-center" id="responsive-navbar-nav" >
      <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

    );
  }
}

export default Menubar;