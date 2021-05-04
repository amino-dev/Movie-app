import { Container, Row, Col, Form, FormControl} from 'react-bootstrap'

function Footer() {

    return (
      <div className="footer mt-5">
      <Container>
<Row>
 <Col lg={3} xs={6} sm={12}>
 
 <img
     src="/footer-logo.png"
     max-width= "100%"
     height= "auto"
     className="mb-5"
     alt="React Bootstrap logo"
   />

 <Row className="pt-5">

<i class="fab fa-facebook-f ml-3  icone"></i>
<i class="fab fa-twitter ml-4 icone"></i>
<i class="fab fa-instagram ml-4 icone"></i>
<i class="fab fa-youtube ml-4 icone"></i>

</Row>
 

 
 </Col>
 <Col lg={3} xs={6} sm={12}>

 <p>Contact</p>
 <li><a href="#"><i class="far fa-envelope mr-3"></i>aminoo@movie.com
<br/>          Skype: MoviesLovers</a></li>
 <li><a href="#"><i class="fas fa-phone-alt pr-3"></i>+1 457 085 9418
<br/>+1 405 987 7456
</a></li>

 </Col>
 <Col lg={3} xs={6} sm={12}>
 <p>Navigation</p>
 <li><a href="#">Home</a></li>
 <li><a href="#">Movies</a></li>
 <li><a href="#">Seris</a></li>
 

 </Col>
 <Col lg={3} xs={6} sm={12}>
 <p></p>

 <div className="d-flex justify-content-center">
 <img
     src="img/footer1.jpg"
     max-width= "100%"
     height= "auto"
     className="mr-2 mb-2"
     alt="React Bootstrap logo"
   />
       <img
     src="img/footer2.jpg"
     max-width= "100%"
     height= "auto"
     className="mr-2 mb-2"
     alt="React Bootstrap logo"
   />
       <img
     src="img/footer3.jpg"
     max-width= "100%"
     height= "auto"
     className="mr-2 mb-2"
     alt="React Bootstrap logo"
   />

     </div>
     <div className="d-flex justify-content-center">
 <img
     src="img/footer4.jpg"
     max-width= "100%"
     height= "auto"
     className="mr-2 mb-2"
     alt="React Bootstrap logo"
   />
       <img
     src="img/footer5.jpg"
     max-width= "100%"
     height= "auto"
     className="mr-2 mb-2"
     alt="React Bootstrap logo"
   />
       <img
     src="img/footer6.jpg"
     max-width= "100%"
     height= "auto"
     className="mr-2 mb-2"
     alt="React Bootstrap logo"
   />

     </div>
 </Col>
</Row>
<hr className="mt-5 mb-3" color="#dadada " />
<div className="d-flex justify-content-center">
<h3>Copyright @2020 Aminoo all rights deserved</h3>
</div>


</Container>


     </div>
    ) 
}
export default Footer