import { Outlet, Link} from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React, { Component } from 'react'
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'

export class Layout extends Component {
  render() {
    return (
    <div className="main"> 
      <Navbar id="navBar">
          <Container>
              <Nav className="justify-content-end">
                <LinkContainer to="/">
                  <Nav.Link><h1 id="header">myDay</h1></Nav.Link>
                </LinkContainer>
               
              </Nav>
              <Nav>
              <LinkContainer to="/Script">
                  <Nav.Link><h5 id="journalNav">Journal</h5></Nav.Link>
                </LinkContainer>
              <LinkContainer to="/Settings">
                  <Nav.Link><h5 id="journalNav">Updates</h5></Nav.Link>
                </LinkContainer>
              </Nav>
          </Container>
      </Navbar>
      <Outlet/>
    </div>
    )
  }
}

export default Layout
