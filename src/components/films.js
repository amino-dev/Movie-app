import MoviesPage from './moviespage';



function Films({movie,search,getFavorites,addFavoriteMovies}) {
    return (
        <div className="films">
         <p  className="pt-5">Films</p>
         <MoviesPage movie={movie} search={search} getFavorites={getFavorites} addFavoriteMovies={addFavoriteMovies} />
        </div>
    ) 
}
export default Films
