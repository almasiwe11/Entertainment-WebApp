import MovieList from "../../Components/MovieList/MovieList";
import Search from "../../Components/Search/Search";
import { useSearch } from "../../Hooks/useSearch";
import { useState } from "react";
function Movies({ movies }) {
  const [find, setFind] = useState("");
  const filter = useSearch(movies, find);
  return (
    <div className="">
      <Search placeholder="movies" setFind={setFind} find={find} />
      <h2 className="container tab">Movies</h2>
      <MovieList movies={filter} />
    </div>
  );
}

export default Movies;
