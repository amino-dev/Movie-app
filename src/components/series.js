import NavBar from './nav';
import SeriesPage from './seriespage'

function Series({movie,search,getFavorites}) {

    return (
        <div className="series">
          <p className="pt-5">Series</p>
          <SeriesPage search={search} movie={movie}  getFavorites={getFavorites}/>
        </div> 
    ) 
}
export default Series
