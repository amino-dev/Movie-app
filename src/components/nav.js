import logo from '../img/logo.png'
import {Navbar, Nav, Form, FormControl, Button, Badge,Modal} from "react-bootstrap"
import { FaHeart, FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom"
import React, {useState,useEffect} from "react";



function NavBar({searchMovie, favorite}){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
<div className="mb-5">
<Navbar id="navbar" collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
  <Navbar.Brand><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Form inline className="ml-auto search">
      <Button  className="button my-auto" variant="outline-dark"><FaSearch/></Button>
      <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={(searchMovie)}/>
    </Form>
    <Nav className="ml-auto">
        <Link className="nav-link" to="/movieapp">Home</Link>
        <Link className="nav-link" to="/movieapp/movies">Movies</Link>
        <Link className="nav-link" to="/movieapp/series">Series</Link>
        <Link className="nav-link" to="/movieapp/favorite"><FaHeart className="favoris-button mb-1"/><Badge variant="secondary">{favorite}</Badge></Link>
        <Link>
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  ) 
}
export default NavBar
