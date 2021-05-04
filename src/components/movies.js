import React, {useState,useEffect} from 'react'
import {Card} from 'react-bootstrap'


function Movies() {
  const [movie, setMovie] = useState([])
  const getMovie = ()=>{
    
    fetch('movies.json').then(
          response => response.json()).then 
                   (movie => setMovie(movie));
  }
  
  useEffect(()=> {getMovie()
  },[])

  console.log(movie)
  return(
<div className="movies-card container">
  { movie.map(el=>
   <div class="flip-card">
   <div class="flip-card-inner">
     <div class="flip-card-front">
     <Card className="movie-card mb-5" >
         <div class="position-relative">
            <Card.Img className="card-img" variant="top" src={el.Poster} />
                <div class=" position-absolute position-rating position-absolute top-0 end-50">
                  <p className="rating"><span>{el.imdbRating}</span></p>
                </div>
          </div>
           <Card.Body>
            <h5 className="text-center mb-3">{el.Title}</h5>
            <p>{el.Plot}</p>
            <div className="d-flex justify-content-between movie-info">
                <p>{el.Year}</p>
                <p>{el.Runtime}</p>
                <p>{el.Language}</p>
            </div>
           </Card.Body>
         </Card>
     </div>
     <div class="flip-card-back">
       <dl className="p-4">
         <dd><h5>Country :</h5>{el.Country}</dd>
         <dd><h5>Language :</h5>{el.Language}</dd>
         <dd><h5>Awards :</h5>{el.Awards}</dd>
         <dd><h5>Actors : </h5>{el.Actors} </dd>
         <dd><h5>Genre : </h5>{el.Genre} </dd>
         <dd><h5>Type : </h5>{el.Type} </dd>
         <dd><h5>Total seasons : </h5>{el.totalSeasons} </dd>
         <dd><h5>imdbVotes : </h5>{el.imdbVotes} </dd>
       </dl>
     </div>
   </div>
 </div> 
)}
</div> 
   )
 }
export default Movies