import Movies from './movies';
import NavBar from './nav'
import Footer from './footer'
import Text from './text';
import Images from './carousel'
import React, {useState} from 'react'

function Home({movie, search,getFavorites,addFavoriteMovies,searchMovie,favorite}) {

    return (
      <div className="home">
           <NavBar searchMovie={searchMovie} favorite={favorite}/>
           <Images />
           <Text />
           <Movies search={search} movie={movie} getFavorites={getFavorites} addFavoriteMovies={addFavoriteMovies}/>
           <Footer/>
      </div>
    ) 
}
export default Home
