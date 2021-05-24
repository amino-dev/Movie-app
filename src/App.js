
import './App.css';
import Home from './components/home';
import Films from './components/films';
import Series from './components/series';
import Favorites from './components/favorites'
import Footer from './components/footer'
import NavBar from './components/nav'
import Dashboard from './components/dashboard'
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter, Route} from "react-router-dom"

function App() {
  const [movie, setMovie] = useState([])
  const getMovie = ()=>{
    
    axios.get('http://localhost:3004/posts').then((response)=> { 
          
      setMovie(response.data)
})
}
  
  useEffect(()=> {getMovie() },[])

  const [search, setSearch]= useState("")
  const searchMovie =(event)=> {
   let input = event.target.value
    setSearch(input)}

  const [favorite, setFavorite] = useState(0)
  const getFavorites =() => {
    setFavorite(favorite + 1)
  }

  const [favoriteMovies, setFavoriteMovies] = useState([])
  const addFavoriteMovies =(e) => {
  favoriteMovies.push(e)
  }
  
  const removeFromWishlist = (el) => {
    let index = favoriteMovies.indexOf(el)
    if (index !== -1) {
      favoriteMovies.splice(index, 1);
      setFavoriteMovies(favoriteMovies)}
    setFavorite(favorite - 1)
  }

  const removeAllFavorites=()=>{
    let length = favoriteMovies.length
     favoriteMovies.splice(0,length)
     setFavoriteMovies(favoriteMovies)
     setFavorite(favorite-length)
  }
  // const [video, setVideo] = useState(false)
  // const playVideo =(e) => {
  //   setVideo(true)
  
  // }

  return (
    <div className="App">
     <div>
      <BrowserRouter>
          {/* <NavBar searchMovie={searchMovie} favorite={favorite}/> */}
          <Route exact path="/movieapp"><Home searchMovie={searchMovie} favorite={favorite} movie={movie} search={search} getFavorites={getFavorites}  addFavoriteMovies={addFavoriteMovies}/></Route>
          <Route path="/movieapp/movies"><Films searchMovie={searchMovie} favorite={favorite} movie={movie} search={search} getFavorites={getFavorites} addFavoriteMovies={addFavoriteMovies}/></Route>
          <Route path="/movieapp/series"><Series searchMovie={searchMovie} favorite={favorite} movie={movie} search={search} getFavorites={getFavorites} addFavoriteMovies={addFavoriteMovies}/></Route>
          <Route path="/movieapp/favorite"><Favorites searchMovie={searchMovie} favorite={favorite} search={search} favoriteMovies={favoriteMovies} removeFromWishlist={removeFromWishlist} removeAllFavorites={removeAllFavorites} /></Route>
          <Route path="/movieapp/admin"><Dashboard movie={movie}/></Route>
      </BrowserRouter>

     </div>
    </div>
  );
}
export default App;



