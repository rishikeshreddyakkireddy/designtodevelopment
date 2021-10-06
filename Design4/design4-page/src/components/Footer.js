import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
const Footer = () => {
    return (  
            <Navbar expand="lg" className = "pt-5">
            <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className = "flex justify-content-between">
                <Nav>
                    <Nav.Item className = "p-3">#MAYA</Nav.Item>
                    <Nav.Item className = "p-3">#3DS MAX</Nav.Item>
                    <Nav.Item className = "p-3">#CINEMA 4D</Nav.Item>
                    <Nav.Item className = "p-3">#HOUDINI</Nav.Item>
                    <Nav.Item className = "p-3">#V-RAY</Nav.Item>
                </Nav>
                <Nav>
                    <Button variant="dark" className="px-5 py-3 rounded-0">FREE 10 DAY TRIAL</Button>{' '}
                </Nav>
            </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default Footer
