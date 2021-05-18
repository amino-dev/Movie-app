import {Modal} from 'react-bootstrap'
import ReactPlayer from 'react-player'
import React, {useState} from 'react'
 
 
function Playerr (props){
return (
<>
{console.log("hahahaha",[...props.el].map(el=>el.id))}
<h1> 
    Hello Amine{[...props.el].map(el=>el.id)}


</h1>


</>
)

}
export default Playerr