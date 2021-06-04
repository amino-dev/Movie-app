
import Rater from 'react-rater'
import {Form, Button, Modal} from 'react-bootstrap'
import axios from "axios";
import React, {useState,useEffect} from "react";
import {FaPlusCircle,FaMinusCircle,FaEdit} from 'react-icons/fa'
import Update from './update'

  const MovieDashboard = ({movie}) => {
  const [details, setDetails] = useState({Poster: "", Title: "" ,Plot: "", Type: "", Genre: "",Year: "",Runtime: "",imdbRating: "",Rating: ""});
  const [show, setShow] = useState(false);
  

    const handleSubmit = (e) => {
      
      e.preventDefault();
      axios
        .post("https://movieapp-d38a8-default-rtdb.firebaseio.com/posts.json",details)
        .then(response => {
          reload();
        })
        .catch((error) => console.log(error));
    };

    const deleteData=(id)=> {
      axios.delete(`https://movieapp-d38a8-default-rtdb.firebaseio.com/posts/${id}.json`)
      .then(response => {
          reload();
        })
      .catch(err=> 
        console.log(err)
      )
    } 

    const reload =() => {
      window.location.reload()
    }

   
    return (
      <div className="dashboard-movie pb-1">
        
         <Button variant="" className="remove-button ml-5 mb-5" onClick={() => setShow(true)}>
        Add a movie
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            movie infos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control type="url" 
              name="Poster"
              value={details.Poster}
              onChange={(e) =>
                setDetails({ ...details, Poster: e.target.value })
              } placeholder="Poster of the movie / serie" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="Title"
              value={details.Title}
              onChange={(e) =>
                setDetails({ ...details, Title: e.target.value })
              } placeholder="Title of the movie / serie" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="Plot"
              value={details.Plot}
              onChange={(e) =>
                setDetails({ ...details, Plot: e.target.value })
              }  placeholder="Plot of the movie / serie" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="number" name="imdbRating"
              value={details.imdbRating}
              onChange={(e) =>
                setDetails({ ...details, imdbRating: e.target.value })
              }  placeholder="imdbRating of the movie / serie" min="1" max="10" step="0.1"/>
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="Type"
              value={details.Type}
              onChange={(e) =>
                setDetails({ ...details, Type: e.target.value })
              }  placeholder="Type of the movie / serie"/>
        </Form.Group>  
        <Form.Group>
          <Form.Control type="text" name="Genre"
              value={details.Genre}
              onChange={(e) =>
                setDetails({ ...details, Genre: e.target.value })
              }  placeholder="Genre of the movie / serie" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="number" name="Year"
              value={details.Year}
              onChange={(e) =>
                setDetails({ ...details, Year: e.target.value })
              }  placeholder="Year of the movie / serie" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="Runtime"
              value={details.Runtime}
              onChange={(e) =>
                setDetails({ ...details, Runtime: e.target.value })
              }  placeholder="Runtime of the movie / serie" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="number" name="Rating"
              value={details.Rating}
              onChange={(e) =>
                setDetails({ ...details, Rating: e.target.value })
              }  placeholder="Rating of the movie / serie" min="1" max="5" />
        </Form.Group> 
         <div className="d-flex justify-content-center">
           <Button className="btn-icon" type="submit"><FaPlusCircle className="icon"/></Button>
         </div>
      </Form>
          </p>
        </Modal.Body>
      </Modal>
        <div className="d-flex justify-content-around flex-wrap">
          {Object.keys(movie).map((id) => (
             <div className="movie-dashboard mb-5">
             <div className="position-relative">
               <div>
                <figure className="hover-img">
                 <img className="dashboard-card" variant="top" src={movie[id].Poster} />
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
                     </div> 
                     <div className="d-flex justify-content-center mb-2">
                     <Button className="btn-icon" onClick={() => deleteData(id)}><FaMinusCircle className="admin-icons icons"/></Button>
                     <Update id={id} movie={movie}/>
                     </div>
                 </figcaption>
                 </figure>
               </div>
               <div className=" position-absolute position-rating rating-dashboard position-absolute top-0 end-50">
                 <p className="rating"><span>{movie[id].imdbRating}</span></p>
               </div>
             </div>
             <div className="d-flex justify-content-center">
               <Rater interactive={false} total={5} rating={movie[id].Rating}/>
             </div>
            </div>
          ))}
      </div>
    </div>
    ) 
}
export default MovieDashboard