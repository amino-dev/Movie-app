import {Modal} from 'react-bootstrap'
import ReactPlayer from 'react-player'

import React, {useState,useEffect}  from 'react';

 
function Player ({el,lgShow,setLgShow}){
    const [moviee, setMovie] = useState([])
    const gettMovie = ()=>{
      
      fetch('movies.json').then(
            response => response.json()).then 
                     (moviee => setMovie(moviee));
    }
    
    useEffect(()=> {gettMovie() },[])
return ( 
<>
{moviee.map(el=>
    
<Modal
 
size="lg"
show={lgShow}
onHide={() => setLgShow(false)}
aria-labelledby="example-modal-sizes-title-lg"
>

<Modal.Header closeButton>
 <Modal.Title>
    {el.title}
 </Modal.Title>
</Modal.Header>
<Modal.Body>
{/* <video controls width="250"
src={el.Video}
/> */}
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