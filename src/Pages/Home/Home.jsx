import Trending from "./Components/Trending/Trending";
import MovieList from "../../Components/MovieList/MovieList";
import Search from "../../Components/Search/Search";
import { useState } from "react";
import { useSearch } from "../../Hooks/useSearch";

function Home({ allMovies }) {
  const notTrending = allMovies.filter((movie) => !movie.isTrending);

  const [find, setFind] = useState("");
  const filter = useSearch(notTrending, find);

  return (
    <div className="home">
      <Search placeholder="movies or TV series" setFind={setFind} find={find} />
      <Trending
        moviesTrending={allMovies.filter((movie) => movie.isTrending)}
      />
      <MovieList title="Recommended for you" movies={filter} />
    </div>
  );
}

export default Home;
