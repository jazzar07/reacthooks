import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Rating from "./Rating";

function Navbarr(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Watched movies</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Rating setRate={props.setRate} rate={props.rate}>
              {" "}
            </Rating>
          </Nav>
          <Form style={{ display: "flex" }}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => props.setSearch(e.target.value)}
              value={props.search}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;