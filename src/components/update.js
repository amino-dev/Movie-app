import { Form, Container,Button,Row,Modal,Col } from 'react-bootstrap';
import {FaEdit} from 'react-icons/fa'
import axios from "axios";
import React, { useEffect, useState } from "react";

const Update = ({id,movie}) => {
    const [input,setInput] = useState({Poster: movie[id].Poster, Title: movie[id].Title ,Plot: movie[id].Plot, Type: movie[id].Type, Genre: movie[id].Genre,Year: movie[id].Year,Runtime: movie[id].Runtime,imdbRating: movie[id].imdbRating,Rating: movie[id].Rating})
   

    const handleChange=(e)=> {
      const {name,value}= e.target
      setInput ({...input, [name]:value})

    }

    const updateData=(id)=> {
      axios.put(`https://movie-cddbd-default-rtdb.firebaseio.com/posts/${id}.json`,input)
      .then(response => {
          setInput((response.data))
          reload()
        })
      .catch(err=> 
        console.log(err)
      );
    } 

    const reload =() => {
      window.location.reload()
    }

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

  return(
    <div>
         <Button className="btn-icon"  onClick={handleShow1}><FaEdit className="admin-icons icons"/></Button>
         <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Update a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
        <Form >
        <Form.Group>
            <Form.Control
              defaultValue={movie[id].Poster}
              type="text"
              name="Poster"
              onChange={handleChange}
              placeholder="Poster of the movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              defaultValue={movie[id].Title}
              type="text"
              name="Title"
              onChange={handleChange}
              placeholder="Title of the movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              defaultValue={movie[id].Plot}
              type="url"
              name="Plot"
              onChange={handleChange}
              placeholder="Plot of the movie / serie"
            />
           </Form.Group>
           <Form.Group>
            <Form.Control
              defaultValue={movie[id].imdbRating}
              type="number"
              name="imdbRating"
              onChange={handleChange}
              placeholder="imdbRating of the movie"
              min="1" max="10" step="0.1"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
            defaultValue={movie[id].Type}
              type="text"
              name="Type"
              onChange={handleChange}
              placeholder="Type of the movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
            defaultValue={movie[id].Genre}
              type="text"
              name="Genre"
              onChange={handleChange}
              placeholder="Genre of the movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
            defaultValue={movie[id].Year}
              type="number"
              name="Year"
              onChange={handleChange}
              placeholder="Year of the movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
            defaultValue={movie[id].Runtime}
              type="text"
              name="Runtime"
              onChange={handleChange}
              placeholder="Runtime} of the movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
            defaultValue={movie[id].Rating}
              type="number"
              name="Rating"
              onChange={handleChange}
              placeholder="Rating of the movie"
              min="1" max="5" 
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
          <Button variant="secondary" className="mr-3" onClick={handleClose1}>
            Close
          </Button>
          <Button onClick={()=>updateData(id)} variant="primary"  className="submit">
            update
          </Button>
          </div>
        </Form>
      </Container>

        </Modal.Body>
      </Modal>
     
    </div>
   )

 }

 export default Update;