
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
// import {FaHeart, FaEye} from 'react-icons/fa'
// import {Card, Button} from 'react-bootstrap'

function MoviesPage({search,movie,getFavorites,addFavoriteMovies}) {
  return(
  <div className="movies-card container">
   {Object.keys(movie).filter((id) => {
      if ((movie[id].Type === "movie" && search === "") || (movie[id].Type === "movie" && movie[id].Title.toLowerCase().includes(search.toLowerCase()))){
       return id
     }
    }).map(id=>
     <div className="movie-card mb-5">
      <div className="position-relative">
        <div>
         <figure className="hover-img">
          <img className="card-img" variant="top" src={movie[id].Poster} />
		      <figcaption>
            <h5 className="text-center mb-3">{movie[id].Title}</h5>
            <p className="text-center mb-3 plot">{movie[id].Plot}</p>
            <div className="d-flex justify-content-around mb-3">
             <p className="">{movie[id].Type}</p>
             <p className="">{movie[id].Genre}</p>
            </div> 
			      <div className="d-flex justify-content-around mb-2">
              <p className="my-auto">{movie[id].Year}</p>
              <p className="my-auto mr-3">{movie[id].Runtime}</p>
              <a><i className="ion-eye icons mr-5"></i></a>
              <a onClick={ () => {getFavorites(); addFavoriteMovies(movie[id])}}><i class="ion-heart icons"></i></a>
              {/* <Button variant="" ><FaEye className="icons"/></Button>
              <Button variant="" ><FaHeart className="icons"/></Button> */}
            </div> 
		      </figcaption>
   	     </figure>
        </div>
        <div class=" position-absolute position-rating position-absolute top-0 end-50">
          <p className="rating"><span>{movie[id].imdbRating}</span></p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Rater interactive={false} total={5} rating={movie[id].Rating}/>
      </div>
     </div>
   ) }
</div> 
   )
 } 
export default MoviesPage