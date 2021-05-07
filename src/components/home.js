import Movies from './movies';
import Text from './text';
import Images from './carousel'
import NavBar from './nav';
import React, {useState} from 'react'

function Home() {
   const [search, setSearch]= useState("")
   const searchMovie =(event)=> {
    let input = event.target.value
     setSearch(input)
}

    return (
      <div className="home">
           <NavBar searchMovie={searchMovie} />
           <Images />
           <Text />
           <Movies search={search}/>
      </div>
    ) 
}
export default Home
