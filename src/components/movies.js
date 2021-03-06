import ReactPlayer from 'react-player'
import {Modal} from 'react-bootstrap'
import Rater from 'react-rater'
import Player from './player'

// import Playerr from './playerr'
import React, {useState,useEffect} from 'react'
import 'react-rater/lib/react-rater.css'
// import {FaHeart, FaEye} from 'react-icons/fa'
// import {Card, Button} from 'react-bootstrap'


function Movies({search,movie,getFavorites,addFavoriteMovies}) {
  
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(

  <div className="movies-card container">
   {Object.keys(movie).filter((id) => {
     if (search === "") {
       return id
     } else if (movie[id].Title.toLowerCase().includes(search.toLowerCase())){
       return id
     }
    }).map((id)=>
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
              <p className="my-auto ">{movie[id].Year}</p>
              <p className="my-auto mr-3">{movie[id].Runtime}</p>
              {/* <Player  el={el} movie={movie}/>  */}
              <a onClick={ () => {getFavorites(); addFavoriteMovies(movie[id])}}><i class="ion-heart icons"></i></a>
              {/* <Button variant="" ><FaEye className="icons"/></Button>
              <Button variant="" ><FaHeart className="icons"/></Button> */}
            </div> 
		      </figcaption>
   	     </figure>
        </div>
        <div className=" position-absolute position-rating position-absolute top-0 end-50">
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

export default Movies

{/* <Modal
size="lg"
show={lgShow}
onHide={() => setLgShow(false)}
aria-labelledby="example-modal-sizes-title-lg"
>
<Modal.Header closeButton>
 <Modal.Title key = {el.id}>{el.Title} hhhhh
 </Modal.Title>
</Modal.Header>
<Modal.Body>
{/* <video controls width="250"
// src={el.Video}
/> */}
{/* <ReactPlayer className="video"
 url = {el.Video}
 controls
 width = "765px"
 height = "300px"
/> 
</Modal.Body>
</Modal> */} 

// return(
//   <div className="movies-card container">
//     { movie.map(el=>
//     //  <div class="flip-card">
//     //  <div class="flip-card-inner">
//     //    <div class="flip-card-front">
//        <Card className="movie-card mb-5" >
//            <div class="position-relative">
//               <Card.Img className="card-img" variant="top" src={el.Poster} />
//                   <div class=" position-absolute position-rating position-absolute top-0 end-50">
//                     <p className="rating"><span>{el.imdbRating}</span></p>
//                   </div>
//             </div>
//              <Card.Body>
//               <h5 className="text-center mb-3">{el.Title}</h5>
//               <p>{el.Plot}</p>
//               <div className="d-flex justify-content-between movie-info">
//                   <p>{el.Year}</p>
//                   <p>{el.Runtime}</p>
//                   <p>{el.Language}</p>
//               </div>
//              </Card.Body>
//            </Card>
//       //  </div>
//       //  <div class="flip-card-back">
//       //    <dl className="p-4">
//       //      <dd><h5>Country :</h5>{el.Country}</dd>
//       //      <dd><h5>Language :</h5>{el.Language}</dd>
//       //      <dd><h5>Awards :</h5>{el.Awards}</dd>
//       //      <dd><h5>Actors : </h5>{el.Actors} </dd>
//       //      <dd><h5>Genre : </h5>{el.Genre} </dd>
//       //      <dd><h5>Type : </h5>{el.Type} </dd>
//       //      <dd><h5>Total seasons : </h5>{el.totalSeasons} </dd>
//       //      <dd><h5>imdbVotes : </h5>{el.imdbVotes} </dd>
//       //    </dl>
//        {/* </div>
//      </div>
//    </div>  */}
//   )}
//   </div> 
//      )
//    }



{/* <div className="movies-card container">
{ movie.map(el=>
  <Card className="movie-card mb-5" >
      <div class="position-relative">
      <div>
      <figure className="snip1446">
      <Card.Img className="card-img" variant="top" src={el.Poster} />
 <figcaption>
   <h2>Pelican Steve</h2>
   <p>My family is dysfunctional and my parents won't empower me. Consequently I'm not self actualized.</p>
   <div className="d-flex justify-content-between movie-info">
             <p className="my-auto">{el.Year}</p>
             <p className="my-auto">{el.Runtime}</p>
             <Button variant="" ><FaEye className="icons"/></Button>
             <Button variant="" ><FaHeart className="icons"/></Button>
         </div>
 </figcaption>
  </figure>
      </div>
             <div class=" position-absolute position-rating position-absolute top-0 end-50">
               <p className="rating"><span>{el.imdbRating}</span></p>
             </div>
       </div>
        <Card.Body>
         <h5 className="text-center mb-3">{el.Title}</h5>
         <div className="d-flex justify-content-between movie-info">
             <p className="my-auto">{el.Year}</p>
             <p className="my-auto">{el.Runtime}</p>
             <Button variant="" ><FaEye/></Button>
             <Button variant="" ><FaHeart/></Button>
         </div>
        </Card.Body>
   </Card>
)}
</div>  */}