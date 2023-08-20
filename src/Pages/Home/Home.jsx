import Trending from "./Components/Trending/Trending";
import MovieList from "../../Components/MovieList/MovieList";
import Search from "../../Components/Search/Search";

function Home({ allMovies }) {
  return (
    <div className="home">
      <Search placeholder="movies or TV series" />
      <Trending
        moviesTrending={allMovies.filter((movie) => movie.isTrending)}
      />
      <MovieList />
    </div>
  );
}

export default Home;
