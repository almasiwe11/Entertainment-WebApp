/* eslint-disable react/prop-types */
import Movie from "../../../../Components/Movie/Movie";
function Trending({ moviesTrending }) {
  return (
    <div className="trending">
      <h1>Trending</h1>
      <div className="trending__movies">
        {moviesTrending.map((trending) => (
          <Movie movie={trending} key={trending.title} trending={true} />
        ))}
      </div>
    </div>
  );
}

export default Trending;
