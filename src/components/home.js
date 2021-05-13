import Movies from './movies';
import Text from './text';
import Images from './carousel'
import NavBar from './nav';
import React, {useState} from 'react'

function Home({movie, search,getFavorites}) {

    return (
      <div className="home">
           <Images />
           <Text />
           <Movies search={search} movie={movie} getFavorites={getFavorites}/>
      </div>
    ) 
}
export default Home
