import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
function AppBarX() {
  return (
    <div>
      <Navbar bg="gray" variant="light" style={{ backgroundColor: "#343a40" }}>
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ fontFamily: "Lato, sans-serif", color: "#f8f9fa" }}
          >
            COOP
          </Navbar.Brand>

          <Nav
            className="me-auto"
            style={{
              fontFamily: "Lato",
              fontSize: "80%",

              paddingLeft: "10%",
              paddingRight: 10,
            }}
          >
            <Nav.Link
              href="#home"
              style={{
                paddingRight: 30,
                color: "#f8f9fa",
              }}
            >
              SHOP ALL
            </Nav.Link>
            <Nav.Link
              href="#features"
              style={{
                paddingRight: 30,
                color: "#f8f9fa",
              }}
            >
              LIVING
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{
                paddingRight: 30,
                color: "#f8f9fa",
              }}
            >
              OFFICE
            </Nav.Link>
            <Nav.Link
              href="#"
              style={{
                paddingRight: 30,
                color: "#f8f9fa",
              }}
            >
              GIFT
            </Nav.Link>

            <div
              style={{
                display: "flex",
                marginLeft: "210%",
                marginRight: "10%",
                width: "auto",
              }}
            >
              <Nav.Link href="#pricing">🔎</Nav.Link>
              <NavLink href="#">📋</NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppBarX;
