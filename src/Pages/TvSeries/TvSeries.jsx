import MovieList from "../../Components/MovieList/MovieList";
import Search from "../../Components/Search/Search";
import { useSearch } from "../../Hooks/useSearch";
import { useState } from "react";
function TvSeries({ movies }) {
  const [find, setFind] = useState("");
  const filter = useSearch(movies, find);
  return (
    <div>
      <Search placeholder="TV series" setFind={setFind} find={find} />
      <h2 className="container tab">TV Series</h2>
      <MovieList movies={filter} />
    </div>
  );
}

export default TvSeries;
