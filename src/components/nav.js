import logo from '../img/logo.png'
import {Navbar, Nav, Form, FormControl, Button, Badge,Modal} from "react-bootstrap"
import { FaHeart, FaSearch,FaUserAlt,FaUserCheck, FaUserPlus} from 'react-icons/fa'
import { Link } from "react-router-dom"
import React, {useState,useEffect} from "react";



function NavBar({searchMovie, favorite}){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

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
        <Button className="button-sign my-auto" variant="outline-dark" onClick={handleShow}>
         <FaUserCheck className="mb-2"/>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connexion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group>
            <Form.Control type="email" 
                name="email"
                placeholder="User email" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" name="Password"
                placeholder="User password" />
          </Form.Group> 
          <div className="connexion-button">
          <Button className="button my-auto" variant="outline-dark">
            Sign in
          </Button>
          </div>
        </Modal.Body>
      </Modal>
        </Link>
        <Link>
        <Button className="button-sign" variant="outline-dark" onClick={handleShow1}>
         <FaUserPlus className="mb-2"/>
        </Button>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>
           Registration
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group>
            <Form.Control type="text" 
                name="name"
                placeholder="User name" />
          </Form.Group>
        <Form.Group>
            <Form.Control type="email" 
                name="email"
                placeholder="User email" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" name="Password"
                placeholder="User password" />
            </Form.Group> 
            <Form.Group>
            <Form.Control type="text" name="Password"
                placeholder="Password confirmation" />
            </Form.Group> 
          <div className="connexion-button">
          <Button className="button my-auto" variant="outline-dark">
            Sign up
          </Button>
          </div>
        </Modal.Body>
      </Modal>
      </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  ) 
}
export default NavBar
