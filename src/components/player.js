import {Modal} from 'react-bootstrap'
import ReactPlayer from 'react-player'
import React, {useState,useEffect}  from 'react';
import axios from "axios";

 
function Player ({el,movie}){
 
   
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
return ( 
<>
<a  onClick={() => setLgShow(true)}><i className="ion-play icons mr-5"></i></a> 
{movie.map(el=>
    
<Modal
 
size="lg"
show={lgShow}
onHide={() => setLgShow(false)}
aria-labelledby="example-modal-sizes-title-lg"
>

<Modal.Header closeButton>
 <Modal.Title>
    {el.Title}
 </Modal.Title>
</Modal.Header>
<Modal.Body>
<ReactPlayer className="video"
    url={el.Video}
    controls
    width = "765px"
    height = "300px"
   /> 
</Modal.Body>
</Modal>
)}
</>
)

}
export default Player