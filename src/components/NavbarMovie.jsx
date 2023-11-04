import React from "react";
import "../Css/NavbarMovie.css";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AddMovie from "./AddMovie";
import { Link } from "react-router-dom";
import CompFilter from "./CompFilter";



function NavbarMovie({setSearchTitleFilm , setsearchRateFilm,  AddMovieFunc}) {
  return (
    <div className="father">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Movie App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action3">Link</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
        <CompFilter setSearchTitleFilm={setSearchTitleFilm} setsearchRateFilm={setsearchRateFilm}  />
        <AddMovie AddMovieFunc={AddMovieFunc}/>
      </Navbar>
    </div>
  );
}

export default NavbarMovie;
