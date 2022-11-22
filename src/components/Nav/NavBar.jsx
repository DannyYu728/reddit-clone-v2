import React from "react";
import {Navbar, Nav, NavDropdown, Form, Button} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {FaRegUserCircle} from "react-icons/fa";
import {AiOutlineDown} from "react-icons/ai";
import {HiOutlineChatAlt2} from "react-icons/hi";
import {MdNotificationsNone} from "react-icons/md";
import {GrAdd} from "react-icons/gr";
import logo from "../../assets/logos/reddisc.png";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.css";

function NavBar({setToggleChat}) {
  // pass toggle to chat icon onClick
  return (
    <Navbar bg="light" expand="sm" className="nav-container" sticky="top">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img src={logo} alt="that logo boiii" style={{height: 25}} />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="smaller-input"
            aria-label="Search"
            size="sm"
          />{" "}
          <Button variant="outline-secondary" size="sm">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>

      {/* <Navbar.Text>
        Signed in as: <a href="/user">Almost</a>
      </Navbar.Text> */}

      <Nav className="ms-auto nav-links">
        <div className="nav-icons-container">
          <HiOutlineChatAlt2
            onClick={setToggleChat}
            size={18}
            className="nav-icon"
          />
          <MdNotificationsNone size={18} className="nav-icon" />
          <LinkContainer
            to="/post"
            style={{marginLeft: -5, marginRight: -5, marginTop: -3}}
          >
            <Nav.Link>
              <GrAdd size={18} className="nav-icon" />
            </Nav.Link>
          </LinkContainer>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <LinkContainer to="/signup">
            <Nav.Link>SignUp</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>

          <NavDropdown
            title={
              <div>
                <FaRegUserCircle className="nav-icon" size={18} />
                <AiOutlineDown className="nav-icon" size={18} />
              </div>
            }
            id="basic-nav-dropdown"
            size="sm"
            align="end"
            flip
          >
            <NavDropdown.Item as="button">Dark Mode</NavDropdown.Item>
            <NavDropdown.Item as="button">Settings</NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item as="button">
              {" "}
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>

            <NavDropdown.Item as="button">
              {" "}
              <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
