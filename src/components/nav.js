import logo from '../img/logo.png'
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"
import { FaHeart} from 'react-icons/fa'

function NavBar(){
  return(
<div className="mb-5">
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Form inline className="ml-auto">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button  variant="outline-dark">Search</Button>
    </Form>
    <Nav className="ml-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Movies</Nav.Link>
      <Nav.Link href="#">Series</Nav.Link>
      <Nav.Link href="#" className="my-auto"><FaHeart/></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  ) 
}
export default NavBar
