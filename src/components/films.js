import MoviesPage from './moviespage';
import Footer from './footer'
import NavBar from './nav'


function Films({movie,search,getFavorites,addFavoriteMovies,searchMovie,favorite}) {
    return (
        <div className="films">
         <p  className="pt-5">Films</p>
         <NavBar searchMovie={searchMovie} favorite={favorite}/>
         <MoviesPage movie={movie} search={search} getFavorites={getFavorites} addFavoriteMovies={addFavoriteMovies} />
         <Footer/>
        </div>
    ) 
}
export default Films
