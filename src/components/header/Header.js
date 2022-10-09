import React from 'react'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <Navbar bg="primary" expand="lg" varient="dark">
        <Container fluid>
          <Navbar.Brand className="brandTitle">
            <Link to='/'>
              Homeschool Progress Portal
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Parent/Teacher" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Logout</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Students" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Nav.Link href="/studentOne">
                    <Link to="/studentOne">Student One</Link>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Nav.Link href="/studentTwo">
                      <Link to="/studentTwo">Student Two</Link>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                
                <Nav.Link href="#home">Add new student</Nav.Link>
              </NavDropdown>

              <NavDropdown title="Documents" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action6">Attendance</NavDropdown.Item>
                <NavDropdown.Item href="#action7">Field Trips</NavDropdown.Item>
                <NavDropdown.Item href="#action8">Medical</NavDropdown.Item>
                <NavDropdown.Item href="#action9">Legal</NavDropdown.Item>
                <NavDropdown.Divider />
                <Nav.Link href="#home">Add new document</Nav.Link>
              </NavDropdown>
              <Nav.Link href="#home">Portfolio</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header