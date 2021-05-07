
import React, {useState,useEffect} from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
// import {FaHeart, FaEye} from 'react-icons/fa'
// import {Card, Button} from 'react-bootstrap'


function SeriesPage() {
  const [movie, setMovie] = useState([])
  const getMovie = ()=>{
    
    fetch('movies.json').then(
          response => response.json()).then 
                   (movie => setMovie(movie));
  }
  
  useEffect(()=> {getMovie() },[])

  return(

  <div className="movies-card container">
   {movie.filter((el) => {
     if ( el.Type === "serie") {
       return el
     }
    }).map(el=>
     <div className="movie-card mb-5" >
      <div class="position-relative">
        <div>
         <figure className="hover-img">
          <img className="card-img" variant="top" src={el.Poster} />
		      <figcaption>
            <h5 className="text-center mb-3">{el.Title}</h5>
            <p className="text-center mb-3 plot">{el.Plot}</p>
            <div className="d-flex justify-content-around mb-3">
             <p class="">{el.Type}</p>
             <p class="">{el.Genre}</p>
            </div> 
			      <div className="d-flex justify-content-around mb-2">
              <p className="my-auto ">{el.Year}</p>
              <p className="my-auto mr-3">{el.Runtime}</p>
              <a href="#"><i class="ion-eye icons mr-5"></i></a>
              <a href="#"><i class="ion-heart icons"></i></a>
              {/* <Button variant="" ><FaEye className="icons"/></Button>
              <Button variant="" ><FaHeart className="icons"/></Button> */}
            </div> 
		      </figcaption>
   	     </figure>
        </div>
        <div class=" position-absolute position-rating position-absolute top-0 end-50">
          <p className="rating"><span>{el.imdbRating}</span></p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Rater total={5} rating={el.Rating}/>
      </div>
     </div>
   ) }
</div> 
   )
 } 
export default SeriesPage