
import SeriesPage from './seriespage'

function Series({movie,search,getFavorites,addFavoriteMovies}) {

    return (
        <div className="series">
          <p className="pt-5">Series</p>
          <SeriesPage search={search} movie={movie}  getFavorites={getFavorites} addFavoriteMovies={addFavoriteMovies}/>
        </div> 
    ) 
}
export default Series
