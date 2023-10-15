/* eslint-disable react/prop-types */
import Movie from "../../../../Components/Movie/Movie"
import { AiOutlineRight } from "react-icons/ai"
import { AiOutlineLeft } from "react-icons/ai"
function Trending({ moviesTrending }) {
  return (
    <div className="trending">
      <h1>Trending</h1>
      <div className="trending__movies">
        {moviesTrending.map((trending) => (
          <Movie movie={trending} key={trending.title} trending={true} />
        ))}
      </div>
      <AiOutlineLeft className="leftArr" />
      <AiOutlineRight className="rightArr" />
    </div>
  )
}

export default Trending
