
import SeriesPage from './seriespage'
import Footer from './footer'
import NavBar from './nav'

function Series({movie,search,getFavorites,addFavoriteMovies,searchMovie,favorite}) {

    return (
        <div className="series">
          <p className="pt-5">Series</p>
          <NavBar searchMovie={searchMovie} favorite={favorite}/>
          <SeriesPage search={search} movie={movie}  getFavorites={getFavorites} addFavoriteMovies={addFavoriteMovies}/>
          <Footer/>
        </div> 
    ) 
}
export default Series
