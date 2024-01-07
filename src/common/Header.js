import React from 'react'
import Container from 'react-bootstrap/Container'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'

function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand><Link to="/">Lulu Mall</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Item className="navItem"><Link to="/add-item">Add Item</Link></Nav.Item>
          <Nav.Item className="navItem"><Link to="/remove-item">Remove Item</Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  {/* <marquee bgcolor="yellow" scrollamount="15">Welcome to Lulu mall, new items are getting loaded!</marquee> */}
  </>

  )
}

export default Header