import { Carousel} from 'react-bootstrap'

function Images() {

    return (
        <Carousel className="carousel mb-5">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel-img"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/71cfa010-f8dd-4298-a94d-1ae5034a857c/208ed962-cb9e-4c61-b976-4b583e1f3453/TN-fr-20210425-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-img"
            src="https://i1.wp.com/danilary.fr/wp-content/uploads/2018/06/serie-tv.png?fit=1100%2C500&ssl=1"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://img5.cdn.cinoche.com/images/615de135d51bf6c4bb7041ae7fd38440.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    ) 
}
export default Images
