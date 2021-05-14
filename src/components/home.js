import Movies from './movies';
import Text from './text';
import Images from './carousel'
import React, {useState} from 'react'

function Home({movie, search,getFavorites,addFavoriteMovies}) {

    return (
      <div className="home">
           <Images />
           <Text />
           <Movies search={search} movie={movie} getFavorites={getFavorites} addFavoriteMovies={addFavoriteMovies}/>
      </div>
    ) 
}
export default Home
