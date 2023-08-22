import MovieList from "../../Components/MovieList/MovieList";
import Search from "../../Components/Search/Search";
import SearchNotFound from "../../Components/MovieList/SearchNotFound";
import { useSearch } from "../../Hooks/useSearch";
import { useState } from "react";
import { useMarked } from "../../Hooks/Context";

function Bookmarked() {
  const { bookmarked } = useMarked();
  const [find, setFind] = useState("");
  const filter = useSearch(bookmarked, find);
  const movies = filter.filter((movie) => movie.category === "Movie");
  const series = filter.filter((movie) => movie.category === "TV Series");
  return (
    <div className="bookmarked">
      <Search placeholder="TV series" setFind={setFind} find={find} />

      {bookmarked.length > 0 ? (
        <>
          {movies.length > 0 && (
            <>
              <h2 className="container bookmarked__title tab">
                Bookmarked Movies
              </h2>
              <MovieList movies={movies} />
            </>
          )}
          {series.length > 0 && (
            <>
              <h2 className="container bookmarked__title tab">
                Bookmarked TV Series
              </h2>
              <MovieList movies={series} />
            </>
          )}
          {movies.length === 0 && series.length === 0 && <SearchNotFound />}
        </>
      ) : (
        <div className="bookmarked__empty">No movies are bookmarked👀</div>
      )}
    </div>
  );
}

export default Bookmarked;
