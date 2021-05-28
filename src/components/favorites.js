import Footer from './footer'
import NavBar from './nav'
import { Container} from 'react-bootstrap'
import img from '../img/wishlist.png'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import {FaHeartBroken} from 'react-icons/fa'
import {Button} from 'react-bootstrap'
import { isElement } from 'react-dom/test-utils'

function Favorites({favoriteMovies,removeFromWishlist,removeAllFavorites,searchMovie,favorite}) {
    return ( 

<div>
<NavBar searchMovie={searchMovie} favorite={favorite}/>
 <div className="favorite">
     <div className="d-flex justify-content-center pt-5">
       <img src={img}/>
     </div>
    <Container>
    <Button onClick={()=>removeAllFavorites()} className="remove-button mb-5">Remove wishlist</Button>
   <div className="d-flex justify-content-around flex-wrap">
   {Object.values(favoriteMovies).map(el=>
     <div className="movie-card pt-4 mb-5" >
      <div className="position-relative">
        <div>
         <figure className="hover-img">
          <img className="card-img" variant="top" src={el.Poster} />
		      <figcaption>
            <h5 className="text-center mb-3">{el.Title}</h5>
            <p className="text-center mb-3 plot">{el.Plot}</p>
            <div className="d-flex justify-content-around mb-3">
             <p className="">{el.Type}</p>
             <p className="">{el.Genre}</p>
            </div> 
			      <div className="d-flex justify-content-around mb-2">
              <p className="my-auto ">{el.Year}</p>
              <p className="my-auto mr-3">{el.Runtime}</p>
              <a onClick={()=>removeFromWishlist(el)}><FaHeartBroken className=" icons mr-5"/></a>
            </div> 
		      </figcaption>
   	     </figure>
        </div>
        <div className=" position-absolute position-rating position-absolute top-0 end-50">
          <p className="rating"><span>{el.imdbRating}</span></p>
        </div>
      </div>
      <div className="d-flex justify-content-center ml-3">
        <Rater interactive={false} total={5} rating={el.Rating}/>
      </div>
     </div>
   ) }
   </div>   
</Container> 
 </div>
 <Footer/> 
 </div>
   )
 } 

      

export default Favorites 
