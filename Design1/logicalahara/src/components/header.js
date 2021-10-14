import * as React from "react"
import { Navbar, Container, Nav, Badge, Button } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Navbar
    collapseOnSelect
    expand="lg"
    variant="dark"
    className="header mx-md-4"
  >
    <Container
      className="justify-content-start justify-content-md-between"
      fluid
    >
      <Navbar.Toggle
        className="border-0"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Brand href="#" className="justify-self-start" id="logo">
        {siteTitle}
      </Navbar.Brand>
      <Navbar.Collapse role="aria-collapse" id="responsive-navbar-nav">
        <Nav className="m-auto justify-content-center">
          <Nav.Link href="#" className="text-white px-4">
            Assets
          </Nav.Link>
          <Nav.Link href="#" className="text-white px-4">
            Staking
          </Nav.Link>
          <Nav.Link href="#" className="text-white px-4">
            Earn
            <Badge className="ms-2 rounded-pill fw-light badge-earn">
              +80% APR
            </Badge>
          </Nav.Link>
          <Nav.Link href="#" className="text-white px-4">
            NFTs
          </Nav.Link>
        </Nav>
        <Button className="downloadBtn border-none px-3" size="sm">
          Download
        </Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
