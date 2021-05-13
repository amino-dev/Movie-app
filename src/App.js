
import './App.css';
import Home from './components/home';
import Films from './components/films';
import Series from './components/series';
import Favorites from './components/favorites'
import Footer from './components/footer'
import NavBar from './components/nav'
import React, {useState,useEffect} from 'react'
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  const [movie, setMovie] = useState([])
  const getMovie = ()=>{
    
    fetch('movies.json').then(
          response => response.json()).then 
                   (movie => setMovie(movie));
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

  return (
    <div className="App">
     <div>
      <BrowserRouter>
          <NavBar searchMovie={searchMovie} favorite={favorite}/>
          <Route exact path="/"><Home movie={movie} search={search} getFavorites={getFavorites} /></Route>
          <Route path="/movies"><Films movie={movie} search={search} getFavorites={getFavorites}/></Route>
          <Route path="/series"><Series movie={movie} search={search} getFavorites={getFavorites}/></Route>
          <Route path="/favorite"><Favorites getFavorites={getFavorites}/></Route>
          <Footer/>
      </BrowserRouter>
     </div>
    </div>
  );
}
export default App;



