import logo from '../img/logo.png'
import { Container, Row, Col} from 'react-bootstrap'
import { FaMailBulk, FaSkype, FaPhoneAlt, FaFax,FaHeart, FaCopyright, FaFacebookSquare,FaTwitterSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa'
import { Link } from "react-router-dom"
function Footer() {

    return (
      <div className="footer">
      <Container className="">
<Row>
 <Col lg={5} xs={12} sm={12}>
 
 <img src={logo} className="App-logo mt-1" alt="logo" />
 <p className="ml-3 footer-description">MoviesLovers is a streaming service that offers a wide variety of award-winning movies, series, and more on thousands of internet-connected devices.</p>
 
 </Col>
 <Col lg={3} xs={12} sm={12}>

 <h5 className="pt-4">Contact</h5>
 <dl className="ml-3 mt-4">
    <dd className="mb-3"><FaMailBulk className="mr-3"/>aminoo@movie.com</dd>
    <dd className="mb-3"><FaSkype className="mr-3"/>Movies.Lovers</dd>
    <dd className="mb-3"><FaPhoneAlt className="mr-3"/>+1 457 085 9418</dd>
    <dd className="mb-3"><FaFax className="mr-3"/>+1 405 987 7456</dd>
 </dl>


 </Col>
 <Col lg={2} xs={12} sm={12}>
   <h5 className="pt-4">Navigation</h5>
   <Link className="nav-link footer-link mt-3" to="/">Home</Link>
   <Link className="nav-link footer-link" to="/movies">Movies</Link>
   <Link className="nav-link footer-link" to="/series">Series</Link>
   <Link className="nav-link footer-link" to="/favorite">Wishlist</Link>
 

 </Col>
 <Col lg={2} xs={12} sm={12}>

 <h5 className="pt-4">Follow us</h5>

 <div className="social d-flex justify-content-evenly ml-3 mt-3">
   <a href="https://www.facebook.com/" target="_blank"><FaFacebookSquare className="mr-3" /></a>
   <a href="https://www.instagram.com/" target="_blank"><FaInstagramSquare className="mr-3" /></a>
   <a href="https://www.twitter.com/" target="_blank"><FaTwitterSquare className="mr-3" /></a>
   <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin/></a>
  </div>
 </Col>
</Row>
<hr className="mt-5 mb-3" color="#dadada " />
<div className=" d-flex justify-content-center">
<p><FaCopyright className="my-auto"/> 2021 <FaHeart/> Aminoo, all rights deserved</p>
</div>


</Container>


     </div>
    ) 
}
export default Footer