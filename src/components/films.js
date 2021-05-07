import MoviesPage from './moviespage';
import NavBar from './nav';


function Films() {

    return (
        <div className="films">
         <NavBar />
         <p  className="pt-5">Films</p>
         <MoviesPage />
        </div>
    ) 
}
export default Films
