import logo from '../img/logo.png'
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"
import { FaHeart, FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom"

function NavBar({searchMovie}){
  return(
<div className="mb-5">
<Navbar id="navbar" collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
  <Navbar.Brand><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Form inline className="ml-auto search">
      <Button  className="button my-auto" variant="outline-dark"><FaSearch /></Button>
      <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={(searchMovie)}/>
    </Form>
    <Nav className="ml-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/movies">Movies</Link>
        <Link className="nav-link" to="/series">Series</Link>
        <Link className="nav-link" to="/favorite"><FaHeart className="favoris-button mb-1"/></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  ) 
}
export default NavBar
