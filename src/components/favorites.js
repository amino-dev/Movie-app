
import { Container, Row } from 'react-bootstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
function Favorites({favoriteMovies}) {

    return (
  
 <div className="favorite py-5">
         <p className="pt-5"></p>
        {favoriteMovies.map(el=>
     <div className="movie-card mr-5 pt-4 mb-5" >
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
            </div> 
		      </figcaption>
   	     </figure>
        </div>
        <div className=" position-absolute position-rating position-absolute top-0 end-50">
          <p className="rating"><span>{el.imdbRating}</span></p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Rater interactive={false} total={5} rating={el.Rating}/>
      </div>
     </div>
   ) }
</div> 

   )
 } 

      

export default Favorites 
