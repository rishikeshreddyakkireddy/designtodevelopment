import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
const NavBar = () => {
    return (
        <div>
            <style type="text/css">
                {`
                @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap');
                .formal2{
                    font-family: 'Raleway', sans-serif;
                }
                .brand{
                    font-size: 30px;
                }
                `}
            </style>
            <Navbar bg="" expand="lg" className = "pb-3 pt-4 formal2">
                <Container className="p-15">
                    <Navbar.Brand href="#home" className = "fw-bold brand">VIDUZA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavDropdown title="PLATFORM" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">PLATFORM 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">PLATFORM 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">PLATFORM 3</NavDropdown.Item>            
                        </NavDropdown>
                        <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">PRODUCT 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">PRODUCT 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">PRODUCT 3</NavDropdown.Item>            
                        </NavDropdown>
                        <NavDropdown title="RESOURCES" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">RESOURCE 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">RESOURCE 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">RESOURCE 3</NavDropdown.Item>            
                        </NavDropdown>
                        <Nav.Link href="#link">FOR INDIVIDUALS</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="outline-light" className="text-black px-5">SIGN IN</Button>{' '}
                        <Button variant="outline-dark" className="px-5 rounded-0">SIGN UP</Button>{' '}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        

    )
}

export default NavBar
