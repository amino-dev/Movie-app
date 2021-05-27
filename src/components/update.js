import { Form, Container,Button,Row,Modal,Col } from 'react-bootstrap';
import {FaEdit} from 'react-icons/fa'
import axios from "axios";
import React, { useEffect, useState } from "react";

const Update = ({el}) => {
    const [input,setInput] = useState({Poster: el.Poster, Title: el.Title ,Plot: el.Plot, Type: el.Type, Genre: el.Genre,Year: el.Year,Runtime: el.Runtime,imdbRating: el.imdbRating,Rating: el.Rating})
   

    const handleChange=(e)=> {
      const {name,value}= e.target
      setInput ({...input, [name]:value})

    }

    const updateData=(id)=> {
      axios.put(`https://movieapp-d38a8-default-rtdb.firebaseio.com/posts.json/${id}`,input)
      .then(response => {
          setInput(response.data)
        })
      .catch(err=> 
        console.log(err)
      );
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
              defaultValue={el.Poster}
              type="text"
              name="Poster"
              onChange={handleChange}
              placeholder="Poster of the movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              defaultValue={el.Title}
              type="text"
              name="Title"
              onChange={handleChange}
              placeholder="Title of the movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              defaultValue={el.Plot}
              type="url"
              name="Plot"
              onChange={handleChange}
              placeholder="Plot of the movie / serie"
            />
           </Form.Group>
           <Form.Group>
            <Form.Control
              defaultValue={el.imdbRating}
              type="number"
              name="imdbRating"
              onChange={handleChange}
              placeholder="imdbRating of the movie"
              min="1" max="10" step="0.1"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
            defaultValue={el.Type}
              type="text"
              name="Type"
              onChange={handleChange}
              placeholder="Type of the movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
            defaultValue={el.Genre}
              type="text"
              name="Genre"
              onChange={handleChange}
              placeholder="Genre of the movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
            defaultValue={el.Year}
              type="number"
              name="Year"
              onChange={handleChange}
              placeholder="Year of the movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
            defaultValue={el.Runtime}
              type="text"
              name="Runtime"
              onChange={handleChange}
              placeholder="Runtime} of the movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
            defaultValue={el.Rating}
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
          <Button onClick={()=>updateData(el.id)} variant="primary"  className="submit">
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