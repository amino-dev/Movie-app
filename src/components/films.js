import MoviesPage from './moviespage';
import NavBar from './nav';


function Films({movie,search,getFavorites}) {
    return (
        <div className="films">
         <p  className="pt-5">Films</p>
         <MoviesPage movie={movie} search={search} getFavorites={getFavorites} />
        </div>
    ) 
}
export default Films
