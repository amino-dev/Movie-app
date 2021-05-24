import {Modal} from 'react-bootstrap'
import ReactPlayer from 'react-player'
import React, {useState,useEffect}  from 'react';

 
function Player ({el}){
    const [moviee, setMovie] = useState([])
    const gettMovie = ()=>{
      
      fetch('movies.json').then(
            response => response.json()).then 
                     (moviee => setMovie(moviee));
    }
    
    useEffect(()=> {gettMovie() },[])

     
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
return ( 
<>
<a  onClick={() => setLgShow(true)}><i className="ion-play icons mr-5"></i></a> 
{moviee.map(el=>
    
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
<video controls width="250"
src={el.Video}
/> 
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