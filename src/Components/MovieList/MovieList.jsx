import Movie from "../Movie/Movie";
import SearchNotFound from "./SearchNotFound";
function MovieList({ title, movies }) {
  return (
    <>
      {movies.length > 0 ? (
        <div className="movieList container">
          <h2>{title}</h2>
          <div className="movieList__gallery">
            {movies.map((movie) => (
              <Movie movie={movie} key={movie.title} />
            ))}
          </div>
        </div>
      ) : (
        <SearchNotFound />
      )}
    </>
  );
}

export default MovieList;
