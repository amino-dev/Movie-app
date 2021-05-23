import {Form, Button,Modal,Table} from 'react-bootstrap'
import axios from "axios";
import React, {useState,useEffect} from "react";
import {FaPlusCircle,FaMinusCircle,FaEdit} from 'react-icons/fa'

const User = () => {
    const [details, setDetails] = useState({Email: "", Password: ""});
    const [show, setShow] = useState(false);
    
    const [data,setData]= useState([])
    const getData=()=> {
        axios.get('http://localhost:3005/posts').then((response) => {
  
            setData( response.data);
            console.log("response:", response);
          });
    }
  
    useEffect(()=>{getData()},[])
  
      const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:3005/posts", details)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      };
  
      const deleteData=(id)=> {
        axios.delete(`http://localhost:3005/posts/${id}`)
        .then(response => {
            console.log(response);
          })
        .catch(err=> 
          console.log(err)
        )
      } 
  
      const updateData=(e,id)=> {
        axios.put(`http://localhost:3005/posts/${id}`)
        .then(response => {
            console.log(response);
          })
        .catch(err=> 
          console.log(err)
        );
      } 
      return (
        <div className="dashboard-movie pb-1">
          
           <Button variant="" className="remove-button ml-5 mb-5" onClick={() => setShow(true)}>
          Add a user
        </Button>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              users information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control type="email" 
                name="email"
                value={details.Email}
                onChange={(e) =>
                  setDetails({ ...details, Email: e.target.value })
                } placeholder="User email" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" name="Password"
                value={details.Password}
                onChange={(e) =>
                  setDetails({ ...details, Password: e.target.value })
                } placeholder="User password" />
          </Form.Group> 
           <div className="d-flex justify-content-center">
             <Button className="btn-icon" type="submit"><FaPlusCircle className="icon"/></Button>
           </div>
        </Form>
            </p>
          </Modal.Body>
        </Modal>
          <div >
          <Table className="table" striped bordered hover className="">
        <thead>
          <tr>
             <th width="60px" className="text-center">Email</th>
             <th className="text-center">Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr>
               <td className="pt-3">{el.Email}</td>
               <td className="pt-3">{el.Password}</td>
               <td><Button className="btn-icon" onClick={(e) => deleteData(el.id)}><FaMinusCircle className="user-icons"/></Button></td>
               <td><Button className="btn-icon"  onClick={(e) => updateData(el.id)}><FaEdit className="user-icons"/></Button></td>   
            </tr>
          ))}
        </tbody>
      </Table>  
      
    </div>
  </div>
)}
  export default User