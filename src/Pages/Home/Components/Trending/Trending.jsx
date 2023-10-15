/* eslint-disable react/prop-types */
import { useState } from "react"
import Movie from "../../../../Components/Movie/Movie"
import { AiOutlineRight } from "react-icons/ai"
import { AiOutlineLeft } from "react-icons/ai"
function Trending({ moviesTrending }) {
  const [translate, setTranslate] = useState(0)
  const [imageView, setImageView] = useState(0)

  const trendingStyle = {
    width: `${moviesTrending.length * 31}rem`,
    transform: `translateX(-${translate}rem)`,
    transition: `0.3s ease-in-out`,
  }

  function handleLeft() {
    console.log(imageView)
    if (imageView === 0) return
    setImageView((prev) => prev - 1)
    setTranslate((prev) => prev - 31)
  }

  function handleRight() {
    console.log(imageView)
    if (imageView === moviesTrending.length - 3) return
    setImageView((prev) => prev + 1)
    setTranslate((prev) => prev + 31)
  }

  return (
    <div className="trending">
      <h1>Trending</h1>
      <div className="trending__movies" style={trendingStyle}>
        {moviesTrending.map((trending) => (
          <Movie movie={trending} key={trending.title} trending={true} />
        ))}
      </div>
      <AiOutlineLeft className="leftArr" onClick={handleLeft} />
      <AiOutlineRight className="rightArr" onClick={handleRight} />
    </div>
  )
}

export default Trending
